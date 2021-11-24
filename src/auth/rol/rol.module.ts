import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolResolver } from './rol.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permiso } from '../permiso/entities/permiso.entity';
import { Rol } from './entities/rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rol, Permiso])],
  providers: [RolResolver, RolService],
})
export class RolModule {}
