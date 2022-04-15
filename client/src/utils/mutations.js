import { gql } from '@apollo/client';

export const CREATE_Rest = gql`
mutation SavedRest($resid: String!, $image_url: String, $foodname: String, $rating: Int, $numOfReviews: Int, $price: String, $tag: String, $location: String, $phone: String) {
	savedRest(resid: $resid, image_url: $image_url, foodname: $foodname, rating: $rating, numOfReviews: $numOfReviews, price: $price, tag: $tag, location: $location, phone: $phone) {
	  resid
	  image_url
	}
  }
`;

export const REMOVE_FAV = gql`
	mutation Mutation($did: String!) {
		removeRest(did: $did) {
			_id
			resid
			
		}
	}
`;

export const CREATE_VOTE = gql`
	mutation createVote($_id: String!, $techNum: Int!) {
		createVote(_id: $_id, techNum: $techNum) {
			_id
			tech1
			tech2
			tech1_votes
			tech2_votes
		}
	}
`;

export const createUser = gql`
	mutation addUser(
		$firstname: String!
		$lastname: String!
		$email: String!
		$password: String!
	) {
		addUser(
			firstname: $firstname
			lastname: $lastname
			email: $email
			password: $password
		) {
			token
			user {
				_id
				firstname
				lastname
				email
			}
		}
	}
`;

export const loginUser = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
        firstname
        lastname
        email
			}
		}
	}
`;


