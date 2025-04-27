import React from 'react';
import { Link } from 'react-router-dom';


function Header(props) {
  return (
    <>
      <header className='header'>
        <div className='kyky'>
          <p>Hi,
            <b>
              <i>{props.user?.userName || 'Гость'}</i>
            </b>
          </p>
        </div>

        <h1>Site header</h1>

        <div className='nav'>
          <Link
            to="/"
          >
            Home
          </Link>

          <Link
            to="/about"
          >
            About us
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header