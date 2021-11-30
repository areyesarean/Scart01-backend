import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Rol } from 'src/auth/rol/entities/rol.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'Id del usuario type uuid' })
  id: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @Field(() => String, { description: 'Nombre de usuario' })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String, { description: 'Contraseña' })
  password: string;

  @Column({ type: 'varchar', nullable: true })
  @Field(() => String, { description: 'Nombre del usuario' })
  firstName: string;

  @Column({ type: 'varchar', nullable: true })
  @Field(() => String, { description: 'Apellidos del usuario' })
  lastName: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @Field(() => String, { description: 'Correo del usuario' })
  email: string;

  @Column({ type: 'boolean', nullable: false })
  @Field(() => Boolean, { description: 'Es activo?' })
  active: boolean;

  @Column({ type: 'boolean', nullable: false })
  @Field(() => Boolean, { description: 'Es verificado?' })
  verified: boolean;

  @ManyToOne(() => Rol, (rol) => rol.users, { eager: true })
  @JoinColumn({ name: 'rol_id' })
  @Field(() => Rol, { description: 'Id del rol' })
  rol: Rol;

  // @BeforeInsert()
  // @BeforeUpdate()
  // async hashPassword() {
  //   if (!this.password) return;
  //   this.password = await bcrypt.hash(this.password, 10);
  // }
}
