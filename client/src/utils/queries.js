import { gql } from '@apollo/client';

export const GET_ITEM = gql`
  query getitems($item: ID) {
    items(item: $item) {
      _id
      name
      description
      price
      image
    }
  }
`;

export const GET_ALL_ITEMS = gql`
  {
    items {
      _id
      name
      description
    }
  }
`;


export const GET_CHECKOUT = gql`
  query getCheckout($items: [ID]!) {
    checkout(items: $items) {
      session
    }
  }
`;

export const GET_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        items {
          _id
          name
          description
          price
          image
        }
      }
    }
  }
`;
