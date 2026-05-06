import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
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
`;

export const GET_USER = gql`
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
`;

export const GET_USER_EMAIL = gql`
  query getUserEmail($email: String!) {
    getUserEmail(email: $email) {
      _id
      firstName
      lastName
      username
      email
    }
  }
`;

export const GET_ONLINE_USERS = gql`
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
`;

export const GET_USERS_AND_COUNT = gql`
  query getAllUsrAndCount{
    getAndCount {
      _id
      userID
      username
    }
  }
`;