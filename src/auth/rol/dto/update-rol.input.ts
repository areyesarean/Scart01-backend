import { CreateRolInput } from './create-rol.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class UpdateRolInput extends PartialType(CreateRolInput) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => ID, {
    description: 'ID del Rol de tipo uuid generado automaticamente',
  })
  id: string;
}
