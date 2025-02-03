const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { postTypeDefs, postResolvers } = require('../src/index');  // Assicurati di importare correttamente i tuoi typeDefs e resolvers

describe('GraphQL post Tests', () => {
    let server;

    // Setup del server Apollo per testare le query
    beforeAll(() => {
        const schema = makeExecutableSchema({
            typeDefs: postTypeDefs,
            resolvers: postResolvers
        })
        server = new ApolloServer({schema});
    });

    it('should return a post object for the getPost query', async () => {
        const query = `
          query {
            getPost(id: "1") {
              id
              title
              content
            }
          }
        `;
    
        const result = await server.executeOperation({ query });
        expect(result.errors).toBeUndefined();
        expect(result.data.getPost).toEqual({
          id: '1',
          title: 'My first post',
          content: 'Hello World!',
        });
      });
});