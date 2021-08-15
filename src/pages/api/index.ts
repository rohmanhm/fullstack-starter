// organize-imports-ignore
import 'reflect-metadata'

import { ApolloServer } from 'apollo-server-micro'
import { NextApiRequest, NextApiResponse } from 'next'
import { buildSchema } from 'type-graphql'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

import { resolvers } from '@/server/generated/type-graphql'
import { HelloResolver } from '@/server/graphql'
import prisma from '@/shared/prisma'
import { Context } from '@/types/api'

export const config = {
  api: { bodyParser: false, externalResolver: true },
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const schema = await buildSchema({
    resolvers: [...resolvers, HelloResolver],
  })

  return new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  }).createHandler({
    path: '/api',
  })(req, res)
}
