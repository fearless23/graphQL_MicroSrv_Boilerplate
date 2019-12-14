const { ApolloServer } = require("apollo-server");
const { graphQL_Config } = require("./GraphQL/_graphQL.config");

const server = new ApolloServer(graphQL_Config);
server
  .listen()
  .then(({ url }) => console.log(`Server started at ${url}`))
  .catch(err => console.log(err));

/*
  // More Options
  {
    tracing,
    cache,
    cacheControl,
    dataSources,
    debug,
    engine,
    executor,
    extensions,
    fieldResolver,
    formatError,
    formatResponse,
    gateway,
    introspection,
    mockEntireSchema,
    mocks,
    modules,
    onHealthCheck,
    parseOptions,
    persistedQueries,
    playground,
    plugins,
    resolvers,
    rootValue,
    schema,
    schemaDirectives,
    subscriptions,
    typeDefs,
    uploads,
    validationRules
  }

*/
