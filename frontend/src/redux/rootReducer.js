import { combineReducers } from "redux";
import { reducer as noteReducer } from './Note/reducer';
import { NOTES_REDUCER } from "./Note/constants";


export default combineReducers({
  [NOTES_REDUCER]: noteReducer
});