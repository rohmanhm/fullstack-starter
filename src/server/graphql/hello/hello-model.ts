import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Hello {
  @Field()
  greeting: string
}
