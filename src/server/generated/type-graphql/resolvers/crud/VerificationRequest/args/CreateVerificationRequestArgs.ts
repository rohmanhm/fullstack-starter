import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationRequestCreateInput } from "../../../inputs/VerificationRequestCreateInput";

@TypeGraphQL.ArgsType()
export class CreateVerificationRequestArgs {
  @TypeGraphQL.Field(_type => VerificationRequestCreateInput, {
    nullable: false
  })
  data!: VerificationRequestCreateInput;
}
