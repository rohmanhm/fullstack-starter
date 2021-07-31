import { Query, Resolver } from 'type-graphql'
import { Hello } from './hello-model'

@Resolver(Hello)
export class HelloResolver {
  @Query(() => Hello)
  async say(): Promise<Hello> {
    return { greeting: 'Hello world' }
  }
}
