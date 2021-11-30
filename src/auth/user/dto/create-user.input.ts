import { InputType, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: 'Nombre de usuario' })
  username: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 32)
  @Field(() => String, { description: 'Contrasenna' })
  password: string;

  @IsString()
  @Field(() => String, { description: 'Nombre del usuario' })
  firstName: string;

  @IsString()
  @Field(() => String, { description: 'Apellidos del usuario' })
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @Field(() => String, { description: 'Correo del usuario' })
  email: string;

  @IsBoolean()
  @IsNotEmpty()
  @Field(() => Boolean, { description: 'Es Activo ?' })
  active: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @Field(() => Boolean, { description: 'Es verificado ?' })
  verified: boolean;

  @IsString()
  @IsUUID()
  @Field(() => String, { description: 'Rol id' })
  rolId: string;
}
