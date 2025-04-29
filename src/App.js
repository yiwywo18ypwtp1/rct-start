import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserContext from './components/UserContext'

import Home from './components/Home';
import About from './components/About';
import Example from './components/Example';
import RegisterForm from './components/RegisterForm';


function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/example" element={<Example />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App