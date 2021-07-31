import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationRequestUpdateManyMutationInput } from "../../../inputs/VerificationRequestUpdateManyMutationInput";
import { VerificationRequestWhereInput } from "../../../inputs/VerificationRequestWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVerificationRequestArgs {
  @TypeGraphQL.Field(_type => VerificationRequestUpdateManyMutationInput, {
    nullable: false
  })
  data!: VerificationRequestUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VerificationRequestWhereInput, {
    nullable: true
  })
  where?: VerificationRequestWhereInput | undefined;
}
