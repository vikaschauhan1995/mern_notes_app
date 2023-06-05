import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../redux/Auth/actions';

const Navbar = () => {
  const dispatch = useDispatch();
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
          <div>
            <button onClick={logout}>Logout</button>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;