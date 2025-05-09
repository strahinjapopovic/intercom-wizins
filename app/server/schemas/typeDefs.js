const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    createdAt: String
    updatedAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    getUserEmail(email: String!): User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!, confirmed: String!): Auth
    login(username: String!, email: String!, password: String!): Auth
    resetPassword(email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
