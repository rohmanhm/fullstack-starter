import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionOrderByInput } from "../../../inputs/SessionOrderByInput";
import { SessionScalarWhereWithAggregatesInput } from "../../../inputs/SessionScalarWhereWithAggregatesInput";
import { SessionWhereInput } from "../../../inputs/SessionWhereInput";
import { SessionScalarFieldEnum } from "../../../../enums/SessionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySessionArgs {
  @TypeGraphQL.Field(_type => SessionWhereInput, {
    nullable: true
  })
  where?: SessionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SessionOrderByInput], {
    nullable: true
  })
  orderBy?: SessionOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "expires" | "sessionToken" | "accessToken" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => SessionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SessionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
