import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateRolInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: 'Nombre del Rol' })
  rolName: string;

  @IsArray()
  @IsUUID('all', {
    each: true,
    message: 'Los id de los permisos deben ser de tipo uuid',
  })
  @Field(() => [String], { description: 'ids de los permisos' })
  permisosId: string[];
}
