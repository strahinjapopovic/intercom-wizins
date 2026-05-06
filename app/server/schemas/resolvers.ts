import bcrypt from 'bcryptjs';
import User from '../models/User.ts';
import { utilsMiddleware } from '../utils/utils.ts';
import * as types from '../src/__generated__/resolvers-types.ts';

export const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (_parent: any, { username }: types.QueryUserArgs) => {
      return await User.findOne({ username });
    },
    getUserEmail: async (_parent: any, { email }: types.QueryGetUserEmailArgs) => {
      return await User.findOne({ email });
    },
    getOnlineUsers: async (_parent: any, { online }: types.User) => {
      return await User.find({ $or: [{ online: 'Yes' }, { online: 'Yes (test user)' }] });
    },
    getAllUsrAndCount: async () => {
      return await User.countDocuments({});
    }
  },
  Mutation: {
    addUser: async (_parent: any, { userID, firstName, lastName, username, email, password, confirmed }: types.MutationAddUserArgs) => {
      const user = await User.create({ userID, firstName, lastName, username, email, password, confirmed });
      if (!user) {
        throw utilsMiddleware.SignupError;
      }
      const token = utilsMiddleware.signToken({
        ...user.toObject(),
        _id: user._id.toString()
      });
      return { token, user };
    },
    deleteUser: async (_parent: any, { id }: types.MutationDeleteUserArgs) => {
      try {
        const deleteUser = await User.findByIdAndDelete(id);
        if (!deleteUser) {
          throw utilsMiddleware.DeleteUserError;
        }
        console.log(JSON.stringify(deleteUser, null, 2));
        return deleteUser;
      } catch (err) {
        console.log(err);
      }
    },
    login: async (_parent: any, { username, email, password }: types.MutationLoginArgs) => {
      const user = await User.findOne({ $or: [{ username: username }, { email: email }] });
      if (!user) {
        throw utilsMiddleware.AuthenticationError;
      }
      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw utilsMiddleware.AuthenticationError;
      }
      const token = utilsMiddleware.signToken({
        ...user.toObject(),
        _id: user._id.toString()
      });
      return { token, user };
    },
    resetPassword: async (_parent: any, { email, password }: types.MutationResetPasswordArgs) => {
      const filter = { email: email };
      const updateDocument = { $set: { password: bcrypt.hashSync(password, 10), }, };
      const changePass = await User.findOneAndUpdate(filter, updateDocument, { new: true });
      if (changePass) {
        console.log(`---\n`, filter, `\n`, updateDocument, `\n`, changePass, `\n---`);
        return changePass;
      } else {
        console.log(`Error: Password not changed!`);
      }
    },
    updateOnlineStatus: async (_parent: any, { username, online }: types.MutationUpdateOnlineStatusArgs) => {
      const filter = { username: username };
      const updateDoc = { $set: { online: online }, };
      const changeOnlineStatus = await User.findOneAndUpdate(filter, updateDoc, { returnDocument: 'after' });
      if (changeOnlineStatus) {
        console.log(`---\n`, filter, `\n`, updateDoc, `\n`, changeOnlineStatus, `\n---`);
        return changeOnlineStatus;
      } else {
        console.log(`Error: Online status not changed!`);
      }
    },
  },
};
