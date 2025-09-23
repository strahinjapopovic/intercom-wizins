import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $email: String!, $password: String!) {
    login(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!, $confirmed: String!) {
    addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, confirmed: $confirmed) {
      token
      user {
        _id
        firstName
        lastName
        username
        email
        password
      }
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation resetPassword($email: String!, $password: String!) {
    resetPassword(email: $email, password: $password) {
      user {
        email
        password
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      user {
        _id
      }
    }
  }
`;
