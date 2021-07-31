import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByVerificationRequestArgs } from "./args/GroupByVerificationRequestArgs";
import { VerificationRequest } from "../../../models/VerificationRequest";
import { VerificationRequestGroupBy } from "../../outputs/VerificationRequestGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationRequest)
export class GroupByVerificationRequestResolver {
  @TypeGraphQL.Query(_returns => [VerificationRequestGroupBy], {
    nullable: false
  })
  async groupByVerificationRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVerificationRequestArgs): Promise<VerificationRequestGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).verificationRequest.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
