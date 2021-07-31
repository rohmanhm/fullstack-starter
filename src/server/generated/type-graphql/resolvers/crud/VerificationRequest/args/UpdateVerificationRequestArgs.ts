import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationRequestUpdateInput } from "../../../inputs/VerificationRequestUpdateInput";
import { VerificationRequestWhereUniqueInput } from "../../../inputs/VerificationRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateVerificationRequestArgs {
  @TypeGraphQL.Field(_type => VerificationRequestUpdateInput, {
    nullable: false
  })
  data!: VerificationRequestUpdateInput;

  @TypeGraphQL.Field(_type => VerificationRequestWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationRequestWhereUniqueInput;
}
