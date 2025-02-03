const { makeExecutableSchema } = require("@graphql-tools/schema");
const {
  helloWorldTypeDefs,
  helloWorldResolvers,
} = require("@tiziano093/graphql-hello-world");
const { postTypeDefs, postResolvers } = require("@tiziano093/graphql-post");

const schema = makeExecutableSchema({
  typeDefs: [helloWorldTypeDefs, postTypeDefs],
  resolvers: [helloWorldResolvers, postResolvers],
});

module.exports = schema;
