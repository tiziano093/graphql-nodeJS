const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { userTypeDefs, userResolvers } = require('../src/index');  // Assicurati di importare correttamente i tuoi typeDefs e resolvers

describe('GraphQL user Tests', () => {
    let server;

    // Setup del server Apollo per testare le query
    beforeAll(() => {
        const schema = makeExecutableSchema({
            typeDefs: userTypeDefs,
            resolvers: userResolvers
        })
        server = new ApolloServer({ schema });
    });

    it('should return a user object for the getUser query', async () => {
        const query = `
          query {
            getUser(id: "1") {
              id
              name
              email
            }
          }
        `;

        const result = await server.executeOperation({ query });
        expect(result.errors).toBeUndefined();
        expect(result.data.getUser).toEqual({
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
        });
    });
});