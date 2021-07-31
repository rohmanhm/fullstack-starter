import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationRequestOrderByInput } from "../../../inputs/VerificationRequestOrderByInput";
import { VerificationRequestScalarWhereWithAggregatesInput } from "../../../inputs/VerificationRequestScalarWhereWithAggregatesInput";
import { VerificationRequestWhereInput } from "../../../inputs/VerificationRequestWhereInput";
import { VerificationRequestScalarFieldEnum } from "../../../../enums/VerificationRequestScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVerificationRequestArgs {
  @TypeGraphQL.Field(_type => VerificationRequestWhereInput, {
    nullable: true
  })
  where?: VerificationRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VerificationRequestOrderByInput], {
    nullable: true
  })
  orderBy?: VerificationRequestOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationRequestScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "token" | "expires" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => VerificationRequestScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VerificationRequestScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
