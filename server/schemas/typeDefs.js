const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tech {
    _id: ID!
    resid: String
    imageurl: String
    name: String
  }

  type Query {
    savedRest: [Tech]
  }

  type Mutation {
    saveBook(resid: String!, imageurl: String, name: String): Tech
    removeRest(did: String!): Tech
  }
`;

module.exports = typeDefs;
