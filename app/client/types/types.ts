export interface SignupFormTypes {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    confirmed: string;
}
export interface LocalStorageOnlineStatus {
    username: string;
    onlineStatus: string;
}
export interface SignupMutationTypes {
    data: {
        userID: string;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        password: string;
        confirmed: string;
    }
}
export interface PayloadGetUserTypes {
    data: {
        _id: string;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
    }
}
export interface UserDataDisplay {
    getOnlineUsers: {
        _id: string;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        online: string;
    }[];
}
export interface TokenLogin {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
}
export interface MyToken {
    id: string;
    email: string;
    exp: number;
}
export interface InterfUser {
  userID: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmed: string;
  createdAt: Date;
  updatedAt: Date;
  online: string;
}
