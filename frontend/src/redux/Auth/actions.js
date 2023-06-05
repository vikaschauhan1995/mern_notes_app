import { LOGIN_ACTION } from './constants';

export function loginAction(user) {
  return {
    type: LOGIN_ACTION,
    payload: user
  }
}