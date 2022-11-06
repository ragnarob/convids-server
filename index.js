const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema, resolver } = require("./api/schema");
const envs = require("./envs");
const { ApolloServer } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");

const app = express();
app.use(express.json());

const prismaClient = new PrismaClient();

app.use(
  envs.graphqlPath,
  graphqlHTTP((request, response, graphQlParams) => ({
    schema,
    rootValue: resolver,
    graphiql: true,
    context: {
      request,
      response,
      prismaClient,
    },
  }))
);

app.listen(envs.port, () => {
  console.log(`Server is running on port ${envs.port}`);
});
