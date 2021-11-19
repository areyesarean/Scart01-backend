import { Module } from '@nestjs/common';
import { PermisoModule } from './permiso/permiso.module';

@Module({
  imports: [PermisoModule]
})
export class AuthModule {}
