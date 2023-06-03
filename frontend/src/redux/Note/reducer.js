import { SET_NOTES, NOTES_LIST, POST_NOTE_RESPONSE_ERROR, SET_POST_NOTE_ERROR } from './constants.js';

const initialState = {
  [NOTES_LIST]: null,
  [POST_NOTE_RESPONSE_ERROR]: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES:
      return { ...state, [NOTES_LIST]: action.payload };
    case SET_POST_NOTE_ERROR:
      console.log("POST_NOTE_RESPONSE_ERROR");
      return { ...state, [POST_NOTE_RESPONSE_ERROR]: true };
    default:
      return state;
  }
}