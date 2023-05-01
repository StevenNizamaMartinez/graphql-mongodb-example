import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typeDefs';

const app = express();

export default app;

export async function start() {
  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  await apolloServer.start();
  app.use(express.json());
  app.use('/graphql', expressMiddleware(apolloServer));

  app.listen(4000, () => {
    console.log(`Server on run at http://localhost:${4000}`);
    console.log(`Graphql server run at http://localhost:${4000}/graphql`);
  });
}
