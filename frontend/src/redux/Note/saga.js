import { takeLatest, put } from 'redux-saga/effects';
import { FETCH_NOTES, SET_NOTES, POST_NOTE, SET_POST_NOTE_ERROR, ADD_NEW_NOTE, DELETE_NOTE_FROM_DB, DELETE_NOTE_FROM_LIST, SET_FETCH_NOTES_ERROR } from './constants';
import { USER } from '../Auth/constants';
import { getDataFromLocalStorage } from '../../utils/getDataFromLocalStorage';
import request from '../../utils/request';
import { BASE_URL } from '../../constants';


function* fetchNotes() {
  try {
    const response = yield request('GET', `${BASE_URL}/api/notes/`);
    // console.log("response=>>", response);
    const notes = yield response.json();
    if (response?.error) {
      yield put({ type: SET_FETCH_NOTES_ERROR, payload: response?.error });
    }
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
    const response = yield request('POST', `${BASE_URL}/api/notes/`, note)
    const json = yield response.json();
    if (!response?.ok) {
      yield put({ type: SET_POST_NOTE_ERROR, payload: json?.error });
    }
    if (response?.ok) {
      yield put({ type: ADD_NEW_NOTE, payload: json });
    }
  } catch (error) {
    yield put({ type: SET_POST_NOTE_ERROR, payload: error?.message });
  }
}

function* deleteNote(params) {
  try {
    const id = params?.payload;
    const response = yield request('DELETE', `${BASE_URL}/api/notes/${id}`)
    const json = yield response.json();
    if (!response?.ok) {
      console.log('There is an error while deleting note');
    }
    if (response?.ok) {
      // console.log('response ok', json);
      yield put({ type: DELETE_NOTE_FROM_LIST, payload: json });
    }
  } catch (error) {
    console.log({ error: error.message });
  }
}

export default function* saga() {
  yield takeLatest(FETCH_NOTES, fetchNotes);
  yield takeLatest(POST_NOTE, postNote);
  yield takeLatest(DELETE_NOTE_FROM_DB, deleteNote);
}