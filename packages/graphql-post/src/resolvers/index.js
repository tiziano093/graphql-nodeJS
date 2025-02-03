const resolvers = {
  Query: {
    getPost: (_, { id }) => {
      return { id, title: "My first post", content: "Hello World!", userId: 1 }; // Mock data
    },
  },
};

module.exports = resolvers;
