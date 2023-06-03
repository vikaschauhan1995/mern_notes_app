import { takeLatest, put } from 'redux-saga/effects';
import { FETCH_NOTES, SET_NOTES, POST_NOTE, SET_POST_NOTE_ERROR } from './constants';


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

function* postNote(params) {
  try {
    const note = yield params?.payload;
    const response = yield fetch('http://localhost:8000/api/notes/', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = yield response.json();
    if (!response?.ok) {
      yield put({ type: SET_POST_NOTE_ERROR });
    }
    if (response?.ok) {
      yield put({ type: FETCH_NOTES });
    }
  } catch (error) {
    yield put({ type: SET_POST_NOTE_ERROR });
  }
}

export default function* saga() {
  yield takeLatest(FETCH_NOTES, fetchNotes);
  yield takeLatest(POST_NOTE, postNote)
}