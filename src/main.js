import { GraphQLServer, PubSub } from 'graphql-yoga'
import Query from './resolvers/Query'
import Author from './resolvers/Author'
import Book from './resolvers/Book'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'

import db from './db'

const pubsub = new PubSub()

const resolvers = {
  Query,
  Author,
  Book,
  Mutation,
  Subscription,
}

const context = {
  db,
  pubsub,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context,
})

server.start(() => console.log('Server is running on localhost:4000'))
