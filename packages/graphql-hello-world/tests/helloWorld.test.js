const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { helloWorldTypeDefs, helloWorldResolvers } = require('../src/index');  // Assicurati di importare correttamente i tuoi typeDefs e resolvers

describe('GraphQL helloWorld Tests', () => {
    let server;

    // Setup del server Apollo per testare le query
    beforeAll(() => {
        const schema = makeExecutableSchema({
            typeDefs: helloWorldTypeDefs,
            resolvers: helloWorldResolvers
        })
        server = new ApolloServer({schema});
    });

    // Test per verificare che la query `hello` restituisca il valore giusto
    it('should return "Hello, world!" for the hello query', async () => {
        const query = `
      query {
        hello
      }
    `;

        const result = await server.executeOperation({ query });
        expect(result.errors).toBeUndefined();
        expect(result.data.hello).toBe('Hello, world!');
    });
});