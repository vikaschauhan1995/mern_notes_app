import { combineReducers } from "redux";
import { reducer as noteReducer } from './Note/reducer';
import { NOTES_REDUCER } from "./Note/constants";
import { AUTH_REDUCER } from "./Auth/constants";
import { reducer as authReducer } from "./Auth/reducer";

export default combineReducers({
  [NOTES_REDUCER]: noteReducer,
  [AUTH_REDUCER]: authReducer
});