import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVerificationRequestArgs } from "./args/AggregateVerificationRequestArgs";
import { VerificationRequest } from "../../../models/VerificationRequest";
import { AggregateVerificationRequest } from "../../outputs/AggregateVerificationRequest";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationRequest)
export class AggregateVerificationRequestResolver {
  @TypeGraphQL.Query(_returns => AggregateVerificationRequest, {
    nullable: false
  })
  async aggregateVerificationRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVerificationRequestArgs): Promise<AggregateVerificationRequest> {
    return getPrismaFromContext(ctx).verificationRequest.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
