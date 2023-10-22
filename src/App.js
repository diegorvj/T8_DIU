import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Index from './components/Index';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (

    <div className="App">

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={loggedIn ? <Index /> : <Login setLoggedIn={setLoggedIn} />} />
          <Route path="/index.js" element={loggedIn ? <Index /> : <Navigate to="/Login" />} />
          <Route path="/profile" element={loggedIn ? <Profile /> : <Navigate to="/Login" />} />
        </Routes>
      </BrowserRouter>
    </div>

      
    </div>

    
  );
}

export default App;
