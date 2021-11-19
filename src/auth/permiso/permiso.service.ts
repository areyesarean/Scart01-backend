import { Injectable } from '@nestjs/common';
import { CreatePermisoInput } from './dto/create-permiso.input';
import { UpdatePermisoInput } from './dto/update-permiso.input';

@Injectable()
export class PermisoService {
  create(createPermisoInput: CreatePermisoInput) {
    return 'This action adds a new permiso';
  }

  findAll() {
    return `This action returns all permiso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permiso`;
  }

  update(id: number, updatePermisoInput: UpdatePermisoInput) {
    return `This action updates a #${id} permiso`;
  }

  remove(id: number) {
    return `This action removes a #${id} permiso`;
  }
}
