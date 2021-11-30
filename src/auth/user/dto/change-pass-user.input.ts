import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class ChangePasswordInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: 'Nombre de usuario' })
  username: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 32)
  @Field(() => String, { description: 'Contraseña antigua' })
  passwordOld: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 32)
  @Field(() => String, { description: 'Contraseña nueva' })
  passwordNew: string;
}
