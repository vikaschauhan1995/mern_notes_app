import { combineReducers } from "redux";
import { reducer as noteReducer } from './Note/reducer';


export default combineReducers({
  noteReducer: noteReducer
});