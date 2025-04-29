import { React, useEffect, useState, useContext } from 'react';

import UserContext from './UserContext'

import Counter from './Counter';
import SharedCounter from './SharedCounter';
import Header from './Header';

import myxi from '../img/myxi.png';


function Home() {
  const { user } = useContext(UserContext);

  const [userInput, setUserInput] = useState('');
  const [count, setCount] = useState(0);
  const myText = 'xyi xyi xyi'
  const [inputLenAlert, setInputLenAlert] = useState('');

  useEffect(
    () => {
      if (userInput.length > 20) {
        setInputLenAlert('Text length won\'t be longer than 20!');
      }
      else {
        setInputLenAlert('');
      }
    }, [userInput]
  );

  return (
    <>
      <Header user={user} />

      <div className='container'>
        <h1>{myText}</h1>

        <p style={{ color: 'red' }}>{inputLenAlert}</p>
        <input className='input'
          placeholder={myText}
          onMouseEnter={mouseOver}
          onChange={(text) => setUserInput(text.target.value)}
        ></input>

        {userInput && <p className='textarea'>{userInput}</p>}

        <img src={myxi} alt='yyy traxi traxi' className='image'></img>

        <label>независимые счетчики</label>
        <Counter />
        <Counter />

        <label>зависимые счетчики</label>
        <SharedCounter count={count} onClick={handleClick} />
        <SharedCounter count={count} onClick={handleClick} />

        <button className='reg-btn' onClick={userInputAlert}>view userInput</button>
        <button className='reg-btn' onClick={nameAlert}>register!</button>
      </div>
    </>
  );

  function mouseOver() {
    console.log('mouse over :)')
  }

  function userInputAlert() {
    console.log(userInput)
    alert(userInput)
  }

  function nameAlert() {
    alert(user ? `cur username: ${user.userName}` : `user not logged in`)
  }

  function handleClick() {
    setCount(count + 1);
  }
}

export default Home