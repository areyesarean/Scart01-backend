import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permiso } from '../permiso/entities/permiso.entity';
import { CreateRolInput } from './dto/create-rol.input';
import { UpdateRolInput } from './dto/update-rol.input';
import { Rol } from './entities/rol.entity';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol) private readonly _rolRepo: Repository<Rol>,
    @InjectRepository(Permiso)
    private readonly _permisoRepo: Repository<Permiso>
  ) {}

  async create(createRolInput: CreateRolInput): Promise<Rol> {
    const rol = new Rol();
    if (createRolInput.permisosId.length == 0)
      throw new BadRequestException('Debe especificar almenos un permiso');
    const permisos = await this._permisoRepo.findByIds(
      createRolInput.permisosId
    );
    if (!permisos) throw new BadRequestException('No hay permisos con esos id');
    if (permisos.length < createRolInput.permisosId.length)
      throw new BadRequestException(
        'Uno o varios de los ids son incorrectos o no existen'
      );
    rol.permisos = permisos;
    rol.rolName = createRolInput.rolName;
    return await this._rolRepo.save(rol);
  }

  async findAll(): Promise<Rol[]> {
    return await this._rolRepo.find({ relations: ['permisos'] });
  }

  async findOne(id: string): Promise<Rol> {
    const rol = await this._rolRepo.findOne(id);
    if (!rol) throw new NotFoundException('No existe el rol');
    return rol;
  }

  async update(id: string, updateRolInput: UpdateRolInput): Promise<Rol> {
    const rol = await this._rolRepo.findOne(id);
    if (!rol) throw new NotFoundException('No existe el rol');
    const permisos = await this._permisoRepo.findByIds(
      updateRolInput.permisosId
    );
    if (!permisos) throw new BadRequestException('No hay permisos con esos id');
    if (permisos.length < updateRolInput.permisosId.length)
      throw new BadRequestException(
        'Uno o varios de los ids son incorrectos o no existen'
      );
    const updateRol = this._rolRepo.merge(rol, updateRolInput);
    updateRol.permisos = permisos;
    return await this._rolRepo.save(updateRol);
  }

  async remove(id: string): Promise<Rol> {
    const rol = await this._rolRepo.findOne(id);
    if (!rol) throw new NotFoundException('No existe el rol');
    await this._rolRepo.delete(id);
    return rol;
  }
}
