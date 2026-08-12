// import { gql } from '@apollo/client'; <- old qraphql template
import { graphql } from '@gql'; // <- Modern preset: 'client' plugins with Apollo Client 4

export const GET_ALL_USERS = graphql(`
  query getAllUsers {
    users {
      _id
      firstName
      lastName
      username
      email
      online
    }
  }
`);

export const GET_USER = graphql(`
  query user($username: String!) {
    user(username: $username) {
      _id
      userID
      firstName
      lastName
      username
      email
      createdAt
      updatedAt
    }
  }
`);

export const GET_USER_EMAIL = graphql(`
  query getUserEmail($email: String!) {
    getUserEmail(email: $email) {
      _id
      firstName
      lastName
      username
      email
    }
  }
`);

export const GET_ONLINE_USERS = graphql(`
  query getOnlineUsers {
    getOnlineUsers {
      _id
      firstName
      lastName
      username
      email
      online
    }
  }
`);

export const GET_USERS_AND_COUNT = graphql(`
  query getAllUsrAndCount{
    getAllUsrAndCount {
      _id
      userID
      username
    }
  }
`);