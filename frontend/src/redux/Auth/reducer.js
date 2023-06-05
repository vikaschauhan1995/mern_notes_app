import {
  USER, SET_LOGIN_ERROR, LOGIN_ERROR, SET_USER, SET_LOADING, IS_LOADING,
  SET_SIGNUP_LOADING, IS_SIGNUP_LOADING, SET_SIGNUP_ERROR, SIGNUP_ERROR
} from './constants';

const initialState = {
  [USER]: null,
  [IS_LOADING]: false,
  [LOGIN_ERROR]: null
}
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, [IS_LOADING]: action.payload }
    case SET_LOGIN_ERROR:
      return { ...state, [LOGIN_ERROR]: action.payload };
    case SET_USER:
      return { ...state, [USER]: action.payload };
    case SET_SIGNUP_LOADING:
      return { ...state, [IS_SIGNUP_LOADING]: action.payload };
    case SET_SIGNUP_ERROR:
      return { ...state, [SIGNUP_ERROR]: action.payload };
    default:
      return state;
  }
}