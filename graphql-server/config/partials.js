const { makeExecutableSchema } = require("@graphql-tools/schema");
const {
  helloWorldTypeDefs,
  helloWorldResolvers,
} = require("@tiziano093/graphql-hello-world");
const { postTypeDefs, postResolvers } = require("@tiziano093/graphql-post");
const { userTypeDefs, userResolvers } = require("@tiziano093/graphql-user");

const schema = makeExecutableSchema({
  typeDefs: [helloWorldTypeDefs, postTypeDefs, userTypeDefs],
  resolvers: [helloWorldResolvers, postResolvers, userResolvers],
});

module.exports = schema;
