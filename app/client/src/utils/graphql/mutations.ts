import { graphql } from '@gql';

export const LOGIN_USER = graphql(`
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
`);

export const ADD_USER = graphql(`
  mutation addUser($userID: String, $firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!, $confirmed: String!) {
    addUser(userID: $userID, firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, confirmed: $confirmed) {
      token
      user {
        _id
        userID
        firstName
        lastName
        username
        email
        password
      }
    }
  }
`);

export const RESET_PASSWORD = graphql(`
  mutation resetPassword($email: String!, $password: String!) {
    resetPassword(email: $email, password: $password) {
      user {
        email
        password
      }
    }
  }
`);

export const DELETE_USER = graphql(`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      user {
        _id
      }
    }
  }
`);

export const UPDATE_ONLINE_STATUS = graphql(`
  mutation updateOnlineStatus($username: String!, $online: String!) {
    updateOnlineStatus(username: $username, online: $online) {
      user {
        _id
        online
        username
      }
    }
  }
`);


