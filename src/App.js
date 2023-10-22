import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Index from './components/Index';
import InformacionPersonal from './components/informacion_personal'; 
import AdicionalFamiliar from './components/adicional_familiar';
import AdicionalPersonal from './components/adicional_personal';
import GrupoFamiliar from './components/grupo_familiar';
import HistorialFamiliar from './components/historial_familiar';
import HistorialPersonal from './components/historial_personal';
import ModificarFamiliar from './components/modificar_familiar';
import ModificarPersonal from './components/modificar_personal';
import PerfilFamiliar from './components/perfil_familiar';






function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/Login.js" element={loggedIn ? <Index /> : <Login setLoggedIn={setLoggedIn} />} />
          <Route path="/Index.js" element={loggedIn ? <Index /> : <Navigate to="/Login.js" />} />
          <Route path="/informacion_personal.js" element={<InformacionPersonal />} />
          <Route path="/adicional_familiar.js" element={<AdicionalFamiliar />} />
          <Route path="/adicional_personal.js" element={<AdicionalPersonal />} />
          <Route path="/grupo_familiar.js" element={<GrupoFamiliar />} />
          <Route path="/historial_familiar.js" element={<HistorialFamiliar />} />
          <Route path="/historial_personal.js" element={<HistorialPersonal />} />
          <Route path="/modificar_familiar.js" element={<ModificarFamiliar />} />
          <Route path="/modificar_personal.js" element={<ModificarPersonal />} />
          <Route path="/perfil_familiar.js" element={<PerfilFamiliar />} />

          
        </Routes>
      </BrowserRouter>
    </div>

      
    

    
  );
}

export default App;