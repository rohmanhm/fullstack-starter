import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountProviderIdProviderAccountIdCompoundUniqueInput } from "../inputs/AccountProviderIdProviderAccountIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AccountWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => AccountProviderIdProviderAccountIdCompoundUniqueInput, {
    nullable: true
  })
  providerId_providerAccountId?: AccountProviderIdProviderAccountIdCompoundUniqueInput | undefined;
}
