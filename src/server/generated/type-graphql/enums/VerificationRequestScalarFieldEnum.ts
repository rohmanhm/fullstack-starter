import * as TypeGraphQL from "type-graphql";

export enum VerificationRequestScalarFieldEnum {
  id = "id",
  identifier = "identifier",
  token = "token",
  expires = "expires",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(VerificationRequestScalarFieldEnum, {
  name: "VerificationRequestScalarFieldEnum",
  description: undefined,
});
