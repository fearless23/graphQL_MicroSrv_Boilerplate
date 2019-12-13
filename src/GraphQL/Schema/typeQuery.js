const { gql } = require("apollo-server");

//GraphQL Queries === GET Rest API
const typeQuery = gql`
  type BookResult {
    data: [Book]
    status: Boolean!
    msg: String!
    code: String!
  }
  type Query {
    books: BookResult
    authors: [Author]
  }
`;

module.exports = { typeQuery };
