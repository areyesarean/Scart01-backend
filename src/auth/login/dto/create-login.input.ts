import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class LoginInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: 'Nombre de usuario' })
  username: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 32)
  @Field(() => String, { description: 'Contraseña' })
  password: string;
}
