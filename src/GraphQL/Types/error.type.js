const { gql } = require("apollo-server");
const typeError = gql`
  # This "Book" type defines the queryable fields for every book in our data source.
  type MyError {
    status: Boolean!
    code: String!
    msg: String!
  }
`;

module.exports = { typeError };
