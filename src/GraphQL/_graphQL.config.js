const { typeDefs } = require("./Schema/_schema");
const { resolvers } = require("./Resolvers/_resolvers");

const context = function(x) {
  // console.log(x.req.headers['x-auth-key'])
  return { req: x.req, res: x.res };
};

module.exports = { graphQL_Config: { typeDefs, resolvers, context } };
