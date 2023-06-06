import React, { useState } from 'react';
import { EMAIL, PASSWORD, AUTH_REDUCER, IS_LOGIN_LOADING, LOGIN_ERROR } from '../redux/Auth/constants';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../redux/Auth/actions';

const Login = () => {
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
    dispatch((loginAction(user)));
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
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name={EMAIL} onChange={handleChange} value={state[EMAIL]} />
        <br />
        <label>Password:</label>
        <input type="password" name={PASSWORD} onChange={handleChange} value={state[PASSWORD]} />
        <button disabled={authState[IS_LOGIN_LOADING]}>{authState[IS_LOGIN_LOADING] ? "Loading..." : "Login"}</button>
      </form>
      {authState[LOGIN_ERROR] && <div>{authState[LOGIN_ERROR]}</div>}
    </div>
  )
}

export default Login
