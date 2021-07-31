import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationRequestWhereUniqueInput } from "../../../inputs/VerificationRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteVerificationRequestArgs {
  @TypeGraphQL.Field(_type => VerificationRequestWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationRequestWhereUniqueInput;
}
