import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Permiso {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'id del permiso en formato uuid' })
  id: string;

  @Column({ unique: true })
  @Field(() => String, { description: 'Nombre del permiso' })
  permisoName: string;
}
