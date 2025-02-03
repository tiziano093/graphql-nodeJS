const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const schema = require("./config/partials");

async function startApolloServer() {
  const server = new ApolloServer({ schema });
  const app = express();

  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  );
}

startApolloServer();
