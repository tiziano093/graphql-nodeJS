const resolvers = {
  Query: {
    getUser: (_, { id }) => {
      return { id, name: "John Doe", email: "john@example.com" }; // Mock data
    },
  },
};

module.exports = resolvers;
