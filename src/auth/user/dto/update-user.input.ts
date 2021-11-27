import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @IsUUID('all')
  @IsString()
  @IsNotEmpty()
  @Field(() => ID, { description: 'id del usuario de tipo uuid' })
  id: string;
}
