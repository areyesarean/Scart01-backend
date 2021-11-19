import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreatePermisoInput {
  @IsString()
  @Field(() => String, { description: 'Nombre del permiso' })
  permisoName: string;
}
