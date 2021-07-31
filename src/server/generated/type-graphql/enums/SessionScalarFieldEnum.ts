import * as TypeGraphQL from "type-graphql";

export enum SessionScalarFieldEnum {
  id = "id",
  userId = "userId",
  expires = "expires",
  sessionToken = "sessionToken",
  accessToken = "accessToken",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(SessionScalarFieldEnum, {
  name: "SessionScalarFieldEnum",
  description: undefined,
});
