import { LOGIN_ACTION, LOGOUT_ACTION } from './constants';

export function loginAction(user) {
  return {
    type: LOGIN_ACTION,
    payload: user
  }
}

export const logoutAction = () => {
  return {
    type: LOGOUT_ACTION,
  }
}