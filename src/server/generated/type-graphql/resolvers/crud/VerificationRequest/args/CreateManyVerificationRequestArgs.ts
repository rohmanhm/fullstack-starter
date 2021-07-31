import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationRequestCreateManyInput } from "../../../inputs/VerificationRequestCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyVerificationRequestArgs {
  @TypeGraphQL.Field(_type => [VerificationRequestCreateManyInput], {
    nullable: false
  })
  data!: VerificationRequestCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
