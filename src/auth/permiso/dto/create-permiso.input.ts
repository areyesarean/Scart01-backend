import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePermisoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
