import { SET_NOTES, NOTES_LIST } from './constants.js';

const initialState = {
  [NOTES_LIST]: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES:
      return { ...state, [NOTES_LIST]: action.payload };
    default:
      return state;
  }
}