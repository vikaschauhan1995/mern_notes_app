import { USER, SET_LOGIN_ERROR, LOGIN_ERROR, SET_USER, SET_LOADING, IS_LOADING } from './constants';

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
    default:
      return state;
  }
}