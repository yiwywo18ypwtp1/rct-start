import { React, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from './Header';
import UserContext from './UserContext'

function RegisterForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  class User {
    constructor(name, password) {
      this.userName = name
      this.userPassword = password
    }
  }
  const { user, setUser } = useContext(UserContext);

  function handleRegister() {
    if (username && password) {
      const user = new User(username, password)
      setUser(user)
      navigate('/')

      // alert(`Пользователь ${username} зарегистрирован!`);

      setUsername('');
      setPassword('');
    }
    else {
      alert('Пожалуйста, заполните все поля!');
    }
  }

  return (
    <>
      <Header />
      <div className="register-container">
        <h2>Регистрация</h2>

        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="reg-btn" onClick={handleRegister}>
          Зарегистрироваться
        </button>

        {user ? (
          <div className="user-info">
            <h3>Зарегистрированный пользователь:</h3>
            <p>Имя: {user.userName}</p>
            <p>Пароль: {user.userPassword}</p>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default RegisterForm;
