import { takeLatest, put } from 'redux-saga/effects';
import { FETCH_NOTES, SET_NOTES } from './constants';


function* fetchNotes() {
  try {
    const response = yield fetch('http://localhost:8000/api/notes/');
    const notes = yield response.json();
    if (response.ok) {
      yield put({ type: SET_NOTES, payload: notes });
    }
  } catch (error) {
    console.log("error: ", error.message);
  }
}

export default function* saga() {
  yield takeLatest(FETCH_NOTES, fetchNotes);
}