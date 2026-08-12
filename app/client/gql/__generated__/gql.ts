/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation login($username: String!, $email: String!, $password: String!) {\n    login(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        firstName\n        lastName\n        username\n        email\n      }\n    }\n  }\n": typeof types.LoginDocument,
    "\n  mutation addUser($userID: String, $firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!, $confirmed: String!) {\n    addUser(userID: $userID, firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, confirmed: $confirmed) {\n      token\n      user {\n        _id\n        userID\n        firstName\n        lastName\n        username\n        email\n        password\n      }\n    }\n  }\n": typeof types.AddUserDocument,
    "\n  mutation resetPassword($email: String!, $password: String!) {\n    resetPassword(email: $email, password: $password) {\n      user {\n        email\n        password\n      }\n    }\n  }\n": typeof types.ResetPasswordDocument,
    "\n  mutation deleteUser($id: ID!) {\n    deleteUser(id: $id) {\n      user {\n        _id\n      }\n    }\n  }\n": typeof types.DeleteUserDocument,
    "\n  mutation updateOnlineStatus($username: String!, $online: String!) {\n    updateOnlineStatus(username: $username, online: $online) {\n      user {\n        _id\n        online\n        username\n      }\n    }\n  }\n": typeof types.UpdateOnlineStatusDocument,
    "\n  query getAllUsers {\n    users {\n      _id\n      firstName\n      lastName\n      username\n      email\n      online\n    }\n  }\n": typeof types.GetAllUsersDocument,
    "\n  query user($username: String!) {\n    user(username: $username) {\n      _id\n      userID\n      firstName\n      lastName\n      username\n      email\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.UserDocument,
    "\n  query getUserEmail($email: String!) {\n    getUserEmail(email: $email) {\n      _id\n      firstName\n      lastName\n      username\n      email\n    }\n  }\n": typeof types.GetUserEmailDocument,
    "\n  query getOnlineUsers {\n    getOnlineUsers {\n      _id\n      firstName\n      lastName\n      username\n      email\n      online\n    }\n  }\n": typeof types.GetOnlineUsersDocument,
    "\n  query getAllUsrAndCount{\n    getAllUsrAndCount {\n      _id\n      userID\n      username\n    }\n  }\n": typeof types.GetAllUsrAndCountDocument,
};
const documents: Documents = {
    "\n  mutation login($username: String!, $email: String!, $password: String!) {\n    login(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        firstName\n        lastName\n        username\n        email\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation addUser($userID: String, $firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!, $confirmed: String!) {\n    addUser(userID: $userID, firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, confirmed: $confirmed) {\n      token\n      user {\n        _id\n        userID\n        firstName\n        lastName\n        username\n        email\n        password\n      }\n    }\n  }\n": types.AddUserDocument,
    "\n  mutation resetPassword($email: String!, $password: String!) {\n    resetPassword(email: $email, password: $password) {\n      user {\n        email\n        password\n      }\n    }\n  }\n": types.ResetPasswordDocument,
    "\n  mutation deleteUser($id: ID!) {\n    deleteUser(id: $id) {\n      user {\n        _id\n      }\n    }\n  }\n": types.DeleteUserDocument,
    "\n  mutation updateOnlineStatus($username: String!, $online: String!) {\n    updateOnlineStatus(username: $username, online: $online) {\n      user {\n        _id\n        online\n        username\n      }\n    }\n  }\n": types.UpdateOnlineStatusDocument,
    "\n  query getAllUsers {\n    users {\n      _id\n      firstName\n      lastName\n      username\n      email\n      online\n    }\n  }\n": types.GetAllUsersDocument,
    "\n  query user($username: String!) {\n    user(username: $username) {\n      _id\n      userID\n      firstName\n      lastName\n      username\n      email\n      createdAt\n      updatedAt\n    }\n  }\n": types.UserDocument,
    "\n  query getUserEmail($email: String!) {\n    getUserEmail(email: $email) {\n      _id\n      firstName\n      lastName\n      username\n      email\n    }\n  }\n": types.GetUserEmailDocument,
    "\n  query getOnlineUsers {\n    getOnlineUsers {\n      _id\n      firstName\n      lastName\n      username\n      email\n      online\n    }\n  }\n": types.GetOnlineUsersDocument,
    "\n  query getAllUsrAndCount{\n    getAllUsrAndCount {\n      _id\n      userID\n      username\n    }\n  }\n": types.GetAllUsrAndCountDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation login($username: String!, $email: String!, $password: String!) {\n    login(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        firstName\n        lastName\n        username\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation login($username: String!, $email: String!, $password: String!) {\n    login(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        firstName\n        lastName\n        username\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation addUser($userID: String, $firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!, $confirmed: String!) {\n    addUser(userID: $userID, firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, confirmed: $confirmed) {\n      token\n      user {\n        _id\n        userID\n        firstName\n        lastName\n        username\n        email\n        password\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation addUser($userID: String, $firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!, $confirmed: String!) {\n    addUser(userID: $userID, firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, confirmed: $confirmed) {\n      token\n      user {\n        _id\n        userID\n        firstName\n        lastName\n        username\n        email\n        password\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation resetPassword($email: String!, $password: String!) {\n    resetPassword(email: $email, password: $password) {\n      user {\n        email\n        password\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation resetPassword($email: String!, $password: String!) {\n    resetPassword(email: $email, password: $password) {\n      user {\n        email\n        password\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteUser($id: ID!) {\n    deleteUser(id: $id) {\n      user {\n        _id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation deleteUser($id: ID!) {\n    deleteUser(id: $id) {\n      user {\n        _id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateOnlineStatus($username: String!, $online: String!) {\n    updateOnlineStatus(username: $username, online: $online) {\n      user {\n        _id\n        online\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation updateOnlineStatus($username: String!, $online: String!) {\n    updateOnlineStatus(username: $username, online: $online) {\n      user {\n        _id\n        online\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllUsers {\n    users {\n      _id\n      firstName\n      lastName\n      username\n      email\n      online\n    }\n  }\n"): (typeof documents)["\n  query getAllUsers {\n    users {\n      _id\n      firstName\n      lastName\n      username\n      email\n      online\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query user($username: String!) {\n    user(username: $username) {\n      _id\n      userID\n      firstName\n      lastName\n      username\n      email\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query user($username: String!) {\n    user(username: $username) {\n      _id\n      userID\n      firstName\n      lastName\n      username\n      email\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUserEmail($email: String!) {\n    getUserEmail(email: $email) {\n      _id\n      firstName\n      lastName\n      username\n      email\n    }\n  }\n"): (typeof documents)["\n  query getUserEmail($email: String!) {\n    getUserEmail(email: $email) {\n      _id\n      firstName\n      lastName\n      username\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getOnlineUsers {\n    getOnlineUsers {\n      _id\n      firstName\n      lastName\n      username\n      email\n      online\n    }\n  }\n"): (typeof documents)["\n  query getOnlineUsers {\n    getOnlineUsers {\n      _id\n      firstName\n      lastName\n      username\n      email\n      online\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllUsrAndCount{\n    getAllUsrAndCount {\n      _id\n      userID\n      username\n    }\n  }\n"): (typeof documents)["\n  query getAllUsrAndCount{\n    getAllUsrAndCount {\n      _id\n      userID\n      username\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;