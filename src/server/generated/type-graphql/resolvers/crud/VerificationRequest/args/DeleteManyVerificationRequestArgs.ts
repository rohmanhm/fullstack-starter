import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationRequestWhereInput } from "../../../inputs/VerificationRequestWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVerificationRequestArgs {
  @TypeGraphQL.Field(_type => VerificationRequestWhereInput, {
    nullable: true
  })
  where?: VerificationRequestWhereInput | undefined;
}
