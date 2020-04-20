import { GraphQLServer, PubSub } from "graphql-yoga";
import Query from "./resolvers/Query";
import Author from "./resolvers/Author";
import Book from "./resolvers/Book";
import Mutation from "./resolvers/Mutation";
import Subscription from "./resolvers/Subscription";
import { PrismaClient } from "@prisma/client";

import db from "./db";

const prisma = new PrismaClient();

const pubsub = new PubSub();

const resolvers = {
  Query,
  Author,
  Book,
  Mutation,
  Subscription,
};

const context = {
  db,
  pubsub,
  prisma,
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: (request) => {
    return {
      ...request,
      ...context,
    };
  },
});

server.start({ port: 8000 }, ({ port }) =>
  console.log(`Server is running on localhost:${port}`)
);
