import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Login {
  @Field(() => String, { description: 'Token' })
  token: string;
}