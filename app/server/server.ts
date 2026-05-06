import express from 'express';
import { ApolloServer } from '@apollo/server';
import { typeDefs } from './schemas/typeDefs.ts';
import { resolvers } from './schemas/resolvers.ts';
import { utilsMiddleware } from './utils/utils.ts';
import { expressMiddleware } from '@as-integrations/express5';
import dbConnect from './config/connection.ts';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  await dbConnect();
  // Apollo server and GraphQL
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: utilsMiddleware.signToken }),
    }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`🚀 API Client running on port ${PORT}!`);
    console.log(`🚀 Server GraphQL running at http://localhost:${PORT}/graphql`);
  });
}
startServer();

