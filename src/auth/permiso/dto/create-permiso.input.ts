import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePermisoInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: 'Nombre del permiso' })
  permisoName: string;

  @IsString()
  @Field(() => String, { description: 'descripcion del permiso' })
  description: string;
}
