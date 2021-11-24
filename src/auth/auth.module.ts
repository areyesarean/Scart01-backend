import { Module } from '@nestjs/common';
import { PermisoModule } from './permiso/permiso.module';
import { RolModule } from './rol/rol.module';

@Module({
  imports: [PermisoModule, RolModule],
})
export class AuthModule {}
