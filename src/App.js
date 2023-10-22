import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
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

          <Route path="/Login.js" element={loggedIn ? <Index /> : <Login setLoggedIn={setLoggedIn} />} />
          <Route path="/Index.js" element={loggedIn ? <Index /> : <Navigate to="/Login.js" />} />
          <Route path="/profile" element={<Profile />}  />
        </Routes>
      </BrowserRouter>
    </div>

      
    </div>

    
  );
}

export default App;