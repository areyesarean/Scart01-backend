import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Login {
  @Field(() => String, { description: 'Nombre de usuario' })
  username: string;

  @Field(() => String, { description: 'Contraseña' })
  password: string;
}
