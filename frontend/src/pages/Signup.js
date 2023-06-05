import React, { useState } from 'react';
import { EMAIL, PASSWORD } from '../redux/Auth/constants';

const Signup = () => {
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
    console.log("user", user);
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
        <button>Signup</button>
      </form>
    </div>
  )
}

export default Signup
