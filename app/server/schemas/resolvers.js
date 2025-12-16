const bcrypt = require('bcryptjs');
const { User } = require('../models');
const { signToken, AuthenticationError, SignupError, DeleteUserError } = require('../utils/utils');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (parent, { username }) => {
      return await User.findOne({ username });
    },
    getUserEmail: async (parent, { email }) => {
      return await User.findOne({ email });
    },
    getOnlineUsers: async (_, { online }) => {
      return await User.find({ $or: [{ online: 'Yes' }, { online: 'Yes (test user)' }] });
    },
    getAllUsrAndCount: async () => {
      return await User.countDocuments({});
    }
  },
  Mutation: {
    addUser: async (parent, { userID, firstName, lastName, username, email, password, confirmed }) => {
      const user = await User.create({ userID, firstName, lastName, username, email, password, confirmed });
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
        console.log(`Error: Password not changed!`);
      }
    },
    updateOnlineStatus: async (_, { username, online }) => {
      const filter = { username: username };
      const updateDoc = { $set: { online: online }, };
      const changeOnlineStatus = await User.findOneAndUpdate(filter, updateDoc, {new: true});
      if(changeOnlineStatus) {
        console.log(`---\n`, filter, `\n`, updateDoc, `\n`, changeOnlineStatus, `\n---`);
        return changeOnlineStatus;
      } else {
        console.log(`Error: Online status not changed!`);
      }
    },
  },
};

module.exports = resolvers;
