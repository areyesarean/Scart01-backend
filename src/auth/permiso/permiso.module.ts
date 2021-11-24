import { Module } from '@nestjs/common';
import { PermisoService } from './permiso.service';
import { PermisoResolver } from './permiso.resolver';
import { Permiso } from './entities/permiso.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from '../rol/entities/rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Permiso, Rol])],
  providers: [PermisoResolver, PermisoService],
})
export class PermisoModule {}
