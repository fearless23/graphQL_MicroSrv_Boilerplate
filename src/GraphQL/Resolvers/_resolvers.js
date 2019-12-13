const { queryResolvers } = require("./query.resolvers");
const { mutationResolvers } = require("./mutation.resolvers");

exports.resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers
};