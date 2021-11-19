import { CreatePermisoInput } from './create-permiso.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePermisoInput extends PartialType(CreatePermisoInput) {
  @Field(() => Int)
  id: number;
}
