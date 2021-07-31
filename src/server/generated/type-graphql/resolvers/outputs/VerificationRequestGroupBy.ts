import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationRequestCountAggregate } from "../outputs/VerificationRequestCountAggregate";
import { VerificationRequestMaxAggregate } from "../outputs/VerificationRequestMaxAggregate";
import { VerificationRequestMinAggregate } from "../outputs/VerificationRequestMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class VerificationRequestGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expires!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => VerificationRequestCountAggregate, {
    nullable: true
  })
  _count!: VerificationRequestCountAggregate | null;

  @TypeGraphQL.Field(_type => VerificationRequestMinAggregate, {
    nullable: true
  })
  _min!: VerificationRequestMinAggregate | null;

  @TypeGraphQL.Field(_type => VerificationRequestMaxAggregate, {
    nullable: true
  })
  _max!: VerificationRequestMaxAggregate | null;
}
