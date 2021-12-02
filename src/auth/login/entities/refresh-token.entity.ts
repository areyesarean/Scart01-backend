import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class RefreshToken {
  @Field(() => String, { description: 'Token caducado' })
  token: string;
}
