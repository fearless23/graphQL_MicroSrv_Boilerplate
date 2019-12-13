const { gql } = require("apollo-server");

//GraphQL Mutations === POST, PUT, DELETE Rest API
const typeMutation = gql`
  type Mutation {
    register(name: String!, email: String!): RegisterResponse
  }

  type RegisterResponse {
    name: String!
    email: String!
  }
`;

module.exports = { typeMutation };
/*
curl 'http://localhost:4000/' 
-H 'Accept-Encoding: gzip, deflate, br' 
-H 'Content-Type: application/json' 
-H 'Accept: application/json' 
-H 'Connection: keep-alive' 
-H 'DNT: 1' 
-H 'Origin: http://localhost:4000' 
--data-binary 
{
  mutation {
    register(name: "ws", email: "jas") {
      name
      email
    }
  }
} 
--compressed
*/