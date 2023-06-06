import { SET_NOTES, NOTES_LIST, POST_NOTE_RESPONSE_ERROR, SET_POST_NOTE_ERROR, ADD_NEW_NOTE, DELETE_NOTE_FROM_LIST, FETCH_NOTES_ERROR, SET_FETCH_NOTES_ERROR, SET_NOTES_REDUCER_TO_INITIAL_STATE } from './constants.js';

const initialState = {
  [NOTES_LIST]: null,
  [POST_NOTE_RESPONSE_ERROR]: null,
  [FETCH_NOTES_ERROR]: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES:
      return { ...state, [NOTES_LIST]: action.payload };
    case SET_FETCH_NOTES_ERROR:
      return { ...state, [FETCH_NOTES_ERROR]: action.payload };
    case SET_POST_NOTE_ERROR:
      return { ...state, [POST_NOTE_RESPONSE_ERROR]: action.payload };
    case ADD_NEW_NOTE:
      return { ...state, [NOTES_LIST]: [action.payload, ...state[NOTES_LIST]] };
    case DELETE_NOTE_FROM_LIST:
      const newList = state[NOTES_LIST].filter(note => {
        if (note._id !== action?.payload?._id) {
          return note;
        }
      });
      return { ...state, [NOTES_LIST]: newList };
    case SET_NOTES_REDUCER_TO_INITIAL_STATE:
      return initialState;
    default:
      return state;
  }
}