import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  name = "name",
  email = "email",
  emailVerified = "emailVerified",
  image = "image",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
