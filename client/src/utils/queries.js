import { gql } from '@apollo/client';

export const QUERY_FAV = gql`
  query Query {
  savedRest {
    _id
    resid
    imageurl
    name
  }
}
`;

