import { CreatePermisoInput } from './create-permiso.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class UpdatePermisoInput extends PartialType(CreatePermisoInput) {
  @IsUUID()
  @Field(() => ID, { description: 'id del permiso en formato uuid' })
  id: string;
}
