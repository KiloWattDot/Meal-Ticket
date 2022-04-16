const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Item {
  _id: ID
  name: String
  description: String
  image: String
  price: Float
}

type Order {
  _id: ID
  purchaseDate: String
  items: [Item]
}

type User {
  _id: ID
  firstname: String
  lastname: String
  email: String
  orders: [Order]
}

type Checkout {
  session: ID
}

type Auth {
  token: ID
  user: User
}

type Tech {
  _id: ID!
  resid: String
  image_url: String
  foodname: String
}

type Query {
  items(name: String): [Item]
  item(itemId: ID!): Item
  user: User
  order(_id: ID!): Order
  checkout(items: [ID]!): Checkout
  savedRest: [Tech]
}

type Mutation {
  addUser(firstname: String!, lastname: String!, email: String!, password: String!): Auth
  addOrder(items: [ID]!): Order
  updateUser(firstname: String, lastname: String, email: String, password: String): User
  login(email: String!, password: String!): Auth
  savedRest(resid: String!, image_url: String, foodname: String): Tech
  removeRest(did: String!): Tech
}



`;

module.exports = typeDefs;
