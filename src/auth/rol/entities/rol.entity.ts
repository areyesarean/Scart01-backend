import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Permiso } from 'src/auth/permiso/entities/permiso.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Rol {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, {
    description: 'ID del Rol de tipo uuid generado automaticamente',
  })
  id: string;

  @Column({ unique: true, length: 25 })
  @Field(() => String, { description: 'Nombre del Rol' })
  rolName: string;

  @Field(() => [Permiso], { description: 'Roles' })
  @ManyToMany(() => Permiso, (permiso) => permiso.rol)
  @JoinTable({
    name: 'rol_permiso',
    joinColumn: {
      name: 'rol_id',
    },
    inverseJoinColumn: {
      name: 'permiso_id',
    },
  })
  permisos: Permiso[];
}
