import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VerificationRequestScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VerificationRequestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VerificationRequestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationRequestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VerificationRequestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationRequestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VerificationRequestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  token?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  expires?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
