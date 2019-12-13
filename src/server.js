const { ApolloServer } = require("apollo-server");
const { graphQL_Config } = require("./GraphQL/_graphQL.config");

const server = new ApolloServer(graphQL_Config);
server
  .listen()
  .then(({ url }) => console.log(`Server started at ${url}`))
  .catch(err => {
    console.log(error);
  });
