const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String!
    author: String!
  }

  type Author {
    name: String!
    age: Int!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  # case, the "authors" query returns an array of zero or more Authors (defined above).
  type Query {
    books: [Book],
    authors: [Author]
  }
`;
/*
We Split typeDefs into each category in `Types` Folder
- book.type.js -> type Book
- author.type.js -> type Author

Then we put type Query into `typeQuery.js` file
- It includes type Query defined above
- We also define typeMutation into its own file

Combine above into `_schema.js`

*/

const booksData = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

const authorsData = [
  {
    name: "J.k. Rowling",
    age: 42
  },
  {
    name: "Michael Crichton",
    age: 34
  }
];

/*
Data above is a fake data source. We will replace it with some 
database or rest api calls. There are few ways to do it.
1.Monolithic GraphQL Server: 
  We configure data from this server directly like Postgres, SQL or MongoDB.
  We will write functions to get data, manuplate, authenticate etc.

2.MicroService GraphQl Server: 
  We already have AWS Lambda, Kubernetes or other microservice httpEndpoints
  for each data like login, signup, books data, users data.
  We will use axios to call each endpoint to get Data. We can handle authentication
  in each microservice or handle in this server.
  This approach gives us, seperation of concern if signup microservice breaks, rest
  microservices are working and our graphQL Server is also up and running. This server
  will acts only a combinator for micro-services.

*/

// Resolvers define the technique for fetching the types defined in the
// schema. 
// # This first Query resolver retrieves books from the "books" array above.
// # This second Query resolver retrieves authors from the "authors" array above.
const resolvers = {
  Query: {
    books: () => booksData,
    authors: () => authorsData
  },
  // Mutation: {
  //   signup: () => somethingElse
  // }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});