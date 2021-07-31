import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationRequestWhereUniqueInput } from "../../../inputs/VerificationRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueVerificationRequestArgs {
  @TypeGraphQL.Field(_type => VerificationRequestWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationRequestWhereUniqueInput;
}
