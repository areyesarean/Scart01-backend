import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreatePermisoInput } from './dto/create-permiso.input';
import { UpdatePermisoInput } from './dto/update-permiso.input';
import { Permiso } from './entities/permiso.entity';

@Injectable()
export class PermisoService {
  constructor(
    @InjectRepository(Permiso)
    private readonly _permisoRepo: Repository<Permiso>
  ) {}

  async create(createPermisoInput: CreatePermisoInput): Promise<Permiso> {
    const newPermiso = this._permisoRepo.create({ ...createPermisoInput });
    return await this._permisoRepo.save(newPermiso);
  }

  async findAll(): Promise<Permiso[]> {
    const permisos = await this._permisoRepo.find();
    if (!permisos) throw new NotFoundException('No existen Permisos');
    return permisos;
  }

  async findOne(id: string): Promise<Permiso> {
    const permiso = await this._permisoRepo.findOne(id);
    if (!permiso) throw new NotFoundException(`No existe el permiso`);
    return permiso;
  }

  async update(id: string, updatePermisoInput: UpdatePermisoInput) {
    const permiso = await this._permisoRepo.findOne(id);
    if (!permiso) throw new NotFoundException(`No existe el permiso`);
    const permisoUpdate = this._permisoRepo.merge(permiso, updatePermisoInput);
    return await this._permisoRepo.save(permisoUpdate);
  }

  async remove(id: string): Promise<any> {
    const permiso = await this._permisoRepo.findOne(id);
    if (!permiso) throw new NotFoundException(`No existe el permiso`);
    await this._permisoRepo.delete(id);
    return permiso;
  }
}
