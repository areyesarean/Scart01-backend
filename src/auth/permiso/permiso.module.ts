import { Module } from '@nestjs/common';
import { PermisoService } from './permiso.service';
import { PermisoResolver } from './permiso.resolver';

@Module({
  providers: [PermisoResolver, PermisoService]
})
export class PermisoModule {}
