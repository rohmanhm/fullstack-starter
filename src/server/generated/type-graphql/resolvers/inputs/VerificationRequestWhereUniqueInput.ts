import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationRequestIdentifierTokenCompoundUniqueInput } from "../inputs/VerificationRequestIdentifierTokenCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VerificationRequestWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token?: string | undefined;

  @TypeGraphQL.Field(_type => VerificationRequestIdentifierTokenCompoundUniqueInput, {
    nullable: true
  })
  identifier_token?: VerificationRequestIdentifierTokenCompoundUniqueInput | undefined;
}
