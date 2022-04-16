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
  firstName: String
  lastName: String
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
  rating: Int
  numOfReviews: Int
  price: String
  tag: String
  location: String
  phone: String
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
  addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  addOrder(items: [ID]!): Order
  updateUser(firstName: String, lastName: String, email: String, password: String): User
  login(email: String!, password: String!): Auth
  savedRest(resid: String!, image_url: String, foodname: String, rating: Int, numOfReviews: Int, tag: String, location: String, phone: String): Tech
  removeRest(did: String!): Tech
}



`;

module.exports = typeDefs;
