import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Index from './components/Index';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (

    <div className="App">

      <BrowserRouter>

        <nav>
          <ul>
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
            <li>
              <Link to="/Index.js">Página de Inicio</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/index.js" element={loggedIn ? <Index /> : <Navigate to="/login" />} />
        </Routes>

      </BrowserRouter>

      
    </div>

    
  );
}

export default App;
