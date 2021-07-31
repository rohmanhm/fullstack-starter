import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCountAggregate } from "../outputs/AccountCountAggregate";
import { AccountMaxAggregate } from "../outputs/AccountMaxAggregate";
import { AccountMinAggregate } from "../outputs/AccountMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AccountGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  providerType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  providerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  providerAccountId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  refreshToken!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accessToken!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  accessTokenExpires!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => AccountCountAggregate, {
    nullable: true
  })
  _count!: AccountCountAggregate | null;

  @TypeGraphQL.Field(_type => AccountMinAggregate, {
    nullable: true
  })
  _min!: AccountMinAggregate | null;

  @TypeGraphQL.Field(_type => AccountMaxAggregate, {
    nullable: true
  })
  _max!: AccountMaxAggregate | null;
}
