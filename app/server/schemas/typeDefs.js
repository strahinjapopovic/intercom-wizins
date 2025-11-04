const typeDefs = `
  type User {
    _id: ID
    userID: String
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    createdAt: String
    updatedAt: String
    online: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]         
    getAllUsers: [User]
    getOnlineUsers: [User]
    user(username: String!): User
    getUserEmail(email: String!): User
    getAllUsrAndCount: [User]
  }

  type Mutation {
    users: [User]
    addUser(userID: String, firstName: String!, lastName: String!, username: String!, email: String!, password: String!, confirmed: String!): Auth
    login(username: String!, email: String!, password: String!): Auth
    resetPassword(email: String!, password: String!): Auth
    deleteUser(id: ID!): Auth
  }
`;

module.exports = typeDefs;
