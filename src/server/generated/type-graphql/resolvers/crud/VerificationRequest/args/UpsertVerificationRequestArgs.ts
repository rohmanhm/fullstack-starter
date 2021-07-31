import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationRequestCreateInput } from "../../../inputs/VerificationRequestCreateInput";
import { VerificationRequestUpdateInput } from "../../../inputs/VerificationRequestUpdateInput";
import { VerificationRequestWhereUniqueInput } from "../../../inputs/VerificationRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertVerificationRequestArgs {
  @TypeGraphQL.Field(_type => VerificationRequestWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => VerificationRequestCreateInput, {
    nullable: false
  })
  create!: VerificationRequestCreateInput;

  @TypeGraphQL.Field(_type => VerificationRequestUpdateInput, {
    nullable: false
  })
  update!: VerificationRequestUpdateInput;
}
