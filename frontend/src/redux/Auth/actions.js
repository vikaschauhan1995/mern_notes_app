import { LOGIN_ACTION, LOGOUT_ACTION, SIGNUP_ACTION } from './constants';

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

export const signupAction = (user) => {
  return {
    type: SIGNUP_ACTION,
    payload: user
  }
}