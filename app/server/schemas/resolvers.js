const bcrypt = require('bcryptjs');
const { User } = require('../models');
const { signToken, AuthenticationError, SignupError, DeleteUserError } = require('../utils/utils');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    getUserEmail: async (parent, { email }) => {
      return User.findOne({ email });
    },
  },
  Mutation: {
    addUser: async (parent, { firstName, lastName, username, email, password, confirmed }) => {
      const user = await User.create({ firstName, lastName, username, email, password, confirmed });
      if(!user) {
        throw SignupError;
      }
      const token = signToken(user);
      return { token, user };
    },
    deleteUser: async (_, { id }) => {
      try {
        const deleteUser = await User.deleteOne({ _id: id, },);
        if(deleteUser.acknowledged == true && deleteUser.deletedCount >= 1) {
          console.log(JSON.stringify(deleteUser, null, 2));
          return deleteUser;
        }
        else {
          throw DeleteUserError;
        }
      } catch (err) {
        console.log(err);
      }
    },
    login: async (parent, { username, email, password }) => {
      const user = await User.findOne({$or: [{ username: username }, { email: email }] });
      if (!user) {
        throw AuthenticationError;
      }
      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },
    resetPassword: async (_, { email, password }) => {
      const filter = { email: email };
      const updateDocument = { $set: { password: bcrypt.hashSync(password, 10),}, };
      const changePass = await User.findOneAndUpdate(filter, updateDocument, {new: true});
      if(changePass) {
        console.log(`---\n`, filter, `\n`, updateDocument, `\n`, changePass, `\n---`);
        return changePass;
      }else {
        console.log(`password not changed!!!`);
      }
    }
  },
};

module.exports = resolvers;
