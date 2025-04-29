import { React, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import UserContext from './UserContext'


function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <header className='header'>
      <div className='kyky'>
        <p>
          {user ? <>Welcome back, <b>{user.userName}</b>!</> : 'You are not logged in :('}
        </p>
        <p>|</p>
        <a href='/' onClick={logOut}><i>{user ? 'Log out' : 'Log in'}</i><svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13 12H22M22 12L18.6667 8M22 12L18.6667 16" stroke="rgb(0, 0, 0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" /><path d="M14 7V5.1736C14 4.00352 12.9999 3.08334 11.8339 3.18051L3.83391 3.84717C2.79732 3.93356 2 4.80009 2 5.84027V18.1597C2 19.1999 2.79733 20.0664 3.83391 20.1528L11.8339 20.8195C12.9999 20.9167 14 19.9965 14 18.8264V17" stroke="rgb(0, 0, 0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" /></svg></a>
      </div>

      <h1>Site header</h1>

      <div className='nav'>
        <Link to="/">
          Home
        </Link>

        <Link to="/about">
          About us
        </Link>

        <Link to="/example">
          Example
        </Link>
      </div>
    </header>
  );

  function logOut(e) {
    e.preventDefault();
    setUser(null);
    navigate('/register');
  }
}

export default Header