# GraphQL MicroService Boilerplate.
- Type: Boilerplate
- Author: `fearless`
- Details: Jaspreet Singh ( jaspreetsingh2379@gmail.com )

```bash
# Run server with
npm run serve

# Additionally, run simple-server with
npm run serve-simple
```

### This boilerplate creates a GraphQL server, which serves as a platform or proxy for multiple micro-services called via axios (or any valid http library).

#### Structure
- `node_modules`: Modules
- `package.json`: Package JSON for npm, node
- `README.md`: This file
- `src`
  - `GraphQL`
    - `Resolvers`: Resolver to manuplate data.
    - `Schema`: Types, Queries, Mutations
    - `Types`: Custom types like book, author.
    - `_graphQL_config.js`: Combine typeDefs, resolvers
  - `MicroServiceHandlers`: Functions to get data for graphql queries and mutations.
  - `server.js`: Entry file.


### We Split typeDefs (`simple_Server`) into each category in `Types` Folder
- book.type.js -> type Book
- author.type.js -> type Author

Then we put type Query into `typeQuery.js` file
- It includes type Query defined above
- We also define typeMutation into its own file

Combine above into `_schema.js`

### Data sources: There are few ways to do it.
1. `Monolithic GraphQL Server`: 
  We configure data from this server directly like Postgres, SQL or MongoDB.
  We will write functions to get data, manuplate, authenticate etc.

2. `MicroService GraphQl Server`: 
  We already have AWS Lambda, Kubernetes or other microservice httpEndpoints
  for each data like login, signup, books data, users data.
  We will use axios to call each endpoint to get Data. We can handle authentication
  in each microservice or handle in this server.
  This approach gives us, seperation of concern if signup microservice breaks, rest
  microservices are working and our graphQL Server is also up and running. This server
  will acts only a combinator for micro-services.