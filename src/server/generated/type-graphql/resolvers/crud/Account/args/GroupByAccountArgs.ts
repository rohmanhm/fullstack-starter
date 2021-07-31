import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AccountOrderByInput } from "../../../inputs/AccountOrderByInput";
import { AccountScalarWhereWithAggregatesInput } from "../../../inputs/AccountScalarWhereWithAggregatesInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
import { AccountScalarFieldEnum } from "../../../../enums/AccountScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAccountArgs {
  @TypeGraphQL.Field(_type => AccountWhereInput, {
    nullable: true
  })
  where?: AccountWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AccountOrderByInput], {
    nullable: true
  })
  orderBy?: AccountOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [AccountScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "providerType" | "providerId" | "providerAccountId" | "refreshToken" | "accessToken" | "accessTokenExpires" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => AccountScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AccountScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
