const { gql } = require("apollo-server");
const typeBook = gql`
  type Book {
    title: String
    author: String
  }
`;

module.exports = { typeBook };
