import {React, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Counter from './components/Counter';
import SharedCounter from './components/SharedCounter';

import myxi from './img/myxi.png'


function Home(props) {
  const [userInput, setUserInput] = useState('');
  const [count, setCount] = useState(0);
  const myText = 'xyi xyi xyi'

  return (
    <>
      <Header user={props.user}/>

      <div className='container'>
        <h1>{myText}</h1>

        <input className='input'
          placeholder={myText}
          onMouseEnter={mouseOver}
          onChange={(text) => setUserInput(text.target.value)}
        ></input>

        <p>{userInput}</p>
        
        <img src={myxi} alt='yyy traxi traxi' className='image'></img>

        <p>независимые счетчики</p>
        <Counter />
        <Counter />

        <p>зависимые счетчики</p> 
        <SharedCounter count={count} onClick={handleClick}/>
        <SharedCounter count={count} onClick={handleClick}/>

        <button className='btn' onClick={dataAlert}>register!</button>
      </div>
    </>   
  );

  function mouseOver() {
    console.log('mouse over :)')

  }

  function dataAlert() {
    console.log(userInput)
    alert(userInput)
  }

  function handleClick() {
    setCount(count + 1);
  }
}


function About(props) {
  return (
    <>
      <Header user={props.user}/>
      <h2>О нас</h2>
    </>
  );
}


function App () {
  class User {
    constructor(name, age) {
      this.userName = name
      this.userAge = age
    }
  }

  const Sasha = new User('саша', 17)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={Sasha} />} />
        <Route path="/about" element={<About user={Sasha} />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App