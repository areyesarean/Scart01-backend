import { CreatePermisoInput } from './create-permiso.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class UpdatePermisoInput extends PartialType(CreatePermisoInput) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => ID, { description: 'id del permiso en formato uuid' })
  id: string;
}
