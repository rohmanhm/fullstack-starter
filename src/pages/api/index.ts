// organize-imports-ignore
import 'reflect-metadata'

import { resolvers } from '@/server/generated/type-graphql'
import prisma from '@/shared/prisma'
import { Context } from '@/types/api'
import { ApolloServer } from 'apollo-server-micro'
import { NextApiRequest, NextApiResponse } from 'next'
import { buildSchema } from 'type-graphql'
import { HelloResolver } from '@/server/graphql'

export const config = {
  api: { bodyParser: false, externalResolver: true },
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const schema = await buildSchema({
    resolvers: [...resolvers, HelloResolver],
  })

  return new ApolloServer({
    schema,
    playground: true,
    context: (): Context => ({ prisma }),
  }).createHandler({
    path: '/api',
  })(req, res)
}
