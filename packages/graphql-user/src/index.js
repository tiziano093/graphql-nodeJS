const path = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const userResolvers = require("./resolvers");

// eslint-disable-next-line
const typesArray = loadFilesSync(path.join(__dirname, "./types"));
const userTypeDefs = mergeTypeDefs(typesArray);

module.exports = { userTypeDefs, userResolvers };
