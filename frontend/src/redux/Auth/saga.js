import { takeLatest, put } from 'redux-saga/effects';
import { LOGIN_ACTION, SET_LOGIN_ERROR, SET_USER, SET_LOADING } from './constants';


function* sendUserToLogin(params) {
  const user = params.payload;
  try {
    yield put({ type: SET_LOADING, payload: true });
    const response = yield fetch('http://localhost:8000/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    const json = yield response.json();
    if (!response.ok) {
      yield put({ type: SET_LOGIN_ERROR, payload: json.error });
      yield put({ type: SET_LOADING, payload: false });
    }
    if (response.ok) {
      // save user to localStorage
      const userToJSON = JSON.stringify(json);
      localStorage.setItem('user', userToJSON);
      // update the auth context
      yield put({ type: SET_USER, payload: json });
      yield put({ type: SET_LOADING, payload: false });
      yield put({ type: SET_LOGIN_ERROR, payload: null });
    }
  } catch (error) {
    console.log("error: ", error.message);
  }
}


export default function* saga() {
  yield takeLatest(LOGIN_ACTION, sendUserToLogin);
}