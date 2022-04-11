import { gql } from '@apollo/client';



export const CREATE_Rest = gql`
mutation SaveBook($resid: String!, $imageurl: String, $name: String) {
  saveBook(resid: $resid, imageurl: $imageurl, name: $name) {
    _id
    resid
    imageurl
  }
}
`;

export const REMOVE_FAV = gql`
mutation Mutation($did: String!) {
  removeRest(did: $did) {
    _id
    resid
    imageurl
    name
  }
}
`;

