import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/Auth/actions';
import { USER, AUTH_REDUCER, EMAIL } from '../redux/Auth/constants';

const Navbar = () => {
  const dispatch = useDispatch();
  const authState = useSelector(state => state[AUTH_REDUCER]);
  const logout = () => {
    dispatch(logoutAction());
  }
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Notes</h2>
        </Link>
        <nav>
          {authState?.[USER] && (
            <div>
              <span>{authState?.[USER][EMAIL]}</span>
              <button onClick={logout}>Logout</button>
            </div>
          )}
          {
            !authState?.[USER] && (
              <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </div>
            )
          }
        </nav>
      </div>
    </header>
  )
}

export default Navbar;