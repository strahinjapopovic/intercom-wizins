import { GraphQLError } from 'graphql';
import type { TokenLogin } from '../../client/types/types.ts';
import jwt from 'jsonwebtoken';

const secret = 'sicret.codex.development';
const expiration = '10h';

export const utilsMiddleware = {
  AuthenticationError: new GraphQLError('Authentication failed: Your authentication information is incorrect. Please try again.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  SignupError: new GraphQLError('Invalid argument value', {
    extensions: {
      code: 'BAD_USER_INPUT',
    }
  }),
  UsernameExistsError: new GraphQLError('Username already taken', {
    extensions: {
      code: 'USERNAME_EXISTS',
    }
  }),
  DeleteUserError: new GraphQLError(`Error Deleting User`, {
    extensions: {
      code: `USER_NOT_DELETED`,
    }
  }),
  signToken: ({ firstName, lastName, email, username, _id }: TokenLogin)  => {
    const payload = { firstName, lastName, email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
