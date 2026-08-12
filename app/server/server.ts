import dns from 'node:dns';
// Render automatically sets process.env.NODE_ENV to 'production'
// This ensures the DNS override ONLY runs on your local machine
if (process.env.NODE_ENV !== 'production') {
  dns.setServers(['1.1.1.1', '8.8.8.8']);
  console.log(`\n---\n🔄 Local development: DNS servers overridden with Cloudflare and Google DNS resolvers.\n---`);
}
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { typeDefs } from './schemas/typeDefs.ts';
import { resolvers } from './schemas/resolvers.ts';
import { utilsMiddleware } from './utils/utils.ts';
import { expressMiddleware } from '@as-integrations/express5';
import dbConnect from './config/connection.ts';
import path from 'path';
import cors from 'cors';
import { prototype } from 'node:module';

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

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 API Client running on port ${PORT}!`);
    console.log(`🚀 GraphQL Server running at http://localhost:${PORT}/graphql`);
  });
}
startServer();

