import * as TypeGraphQL from "type-graphql";

export enum AccountScalarFieldEnum {
  id = "id",
  userId = "userId",
  providerType = "providerType",
  providerId = "providerId",
  providerAccountId = "providerAccountId",
  refreshToken = "refreshToken",
  accessToken = "accessToken",
  accessTokenExpires = "accessTokenExpires",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(AccountScalarFieldEnum, {
  name: "AccountScalarFieldEnum",
  description: undefined,
});
