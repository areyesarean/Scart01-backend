import { Module } from '@nestjs/common';
import { PermisoService } from './permiso.service';
import { PermisoResolver } from './permiso.resolver';
import { Permiso } from './entities/permiso.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Permiso])],
  providers: [PermisoResolver, PermisoService],
})
export class PermisoModule {}
