import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EMAIL, PASSWORD, AUTH_REDUCER, IS_SIGNUP_LOADING, SIGNUP_ERROR } from '../redux/Auth/constants';
import { signupAction } from '../redux/Auth/actions';

const Signup = () => {
  const dispatch = useDispatch();
  const authState = useSelector(state => state[AUTH_REDUCER]);
  const [state, setState] = useState({
    [EMAIL]: '',
    [PASSWORD]: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      [EMAIL]: state[EMAIL],
      [PASSWORD]: state[PASSWORD]
    }
    dispatch(signupAction(user));
  }
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (value !== '' && value !== undefined && value !== null) {
      setState({ ...state, [name]: value });
    } else {
      setState({ ...state, [name]: value });
    }
  }
  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name={EMAIL} onChange={handleChange} value={state[EMAIL]} />
        <br />
        <label>Password:</label>
        <input type="password" name={PASSWORD} onChange={handleChange} value={state[PASSWORD]} />
        <button disabled={authState[IS_SIGNUP_LOADING]}>{authState[IS_SIGNUP_LOADING] ? "Loading..." : "Signup"}</button>
      </form>
      {authState[SIGNUP_ERROR] && <div>{authState[SIGNUP_ERROR]}</div>}
    </div>
  )
}

export default Signup
