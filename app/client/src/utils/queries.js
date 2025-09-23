import { gql } from '@apollo/client';

export const GET_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      firstName
      lastName
      username
      email
      createdAt
      updatedAt
    }
  }
`;

export const GET_USER_EMAIL = gql`
  query getUserEmail($email: String!) {
    getUserEmail(email: $email) {
      email
    }
  }
`;