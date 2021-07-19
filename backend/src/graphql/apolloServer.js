import { ApolloServer } from 'apollo-server-express';

import prisma from '../prisma/prisma';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const server = () => {
  return new ApolloServer({
    typeDefs,
    resolvers,

    context: async ({ req, res }) => {
      return { req, res, prisma };
    }
  });
};

export default server;
