import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteVerificationRequestArgs } from "./args/DeleteVerificationRequestArgs";
import { VerificationRequest } from "../../../models/VerificationRequest";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationRequest)
export class DeleteVerificationRequestResolver {
  @TypeGraphQL.Mutation(_returns => VerificationRequest, {
    nullable: true
  })
  async deleteVerificationRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteVerificationRequestArgs): Promise<VerificationRequest | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).verificationRequest.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
