import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Rol } from 'src/auth/rol/entities/rol.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Permiso {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'id del permiso en formato uuid' })
  id: string;

  @Column({ unique: true, name: 'permiso_name' })
  @Field(() => String, { description: 'Nombre del permiso' })
  permisoName: string;

  @Column({ length: 255, nullable: true, default: 'No tiene descripcion' })
  @Field(() => String, {
    description: 'Descripcion del permiso',
  })
  description: string;

  //@Field(() => [Rol], { description: 'Rols' })
  @ManyToMany(() => Rol, (rol) => rol.permisos)
  rol: Rol[];
}
