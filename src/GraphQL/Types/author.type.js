const { gql } = require("apollo-server");
const typeAuthor = gql`
  # This "Book" type defines the queryable fields for every book in our data source.
  type Author {
    name: String!
    age: Int!
  }
`;

module.exports = { typeAuthor };
