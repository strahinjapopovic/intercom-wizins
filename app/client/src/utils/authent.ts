import decode from 'jwt-decode';
import type { MyToken } from '../../types/types.ts';
// Return token from localStorage
export const getToken = () => {
  const localData = localStorage.getItem('id_token');
  return localData;
}
// Return decoded token from localStorage
export const getProfile = () => {
  const token = getToken();
  return token ? decode(token) : null;
}
export const Logout = () => {
  window.location.replace("/");
  localStorage.removeItem('id_token');
}
// Return boolean
export const IsTokenExpired = (token: string) => {
  // Decode token to get its expiration time set by the server
  const decoded = decode(token) as MyToken;
  // If expiration time is less than the current time (in seconds) the token is expired and return true
  if (decoded.exp < Date.now() / 1000) {
    localStorage.removeItem('id_token');
    return true;
  }
  // If token not expired return false
  return false;
}
export const login = (idToken: string) => {
  localStorage.setItem('id_token', idToken);
  window.location.replace('/dashboard');
}
// Return boolean
export const LoggedIn = () => {
  const token = getToken();
  // Token not expired then return true
  return token && !IsTokenExpired(token) ? true : false;
}
