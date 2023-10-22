import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ setLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulamos una autenticación exitosa.
    const success = true;

    if (success) {
      setLoggedIn(true);
      navigate('/Index.js');
    } else {
      // Manejo de inicio de sesión fallido
      console.error('Inicio de sesión fallido');
    }
  }

  return (
    <div className="login-container" style={{marginTop:'20%'}}>
      <h2>Inicia sesión en Clínica Genérica</h2>
      <br></br><br></br>
      <form className="login-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="RUT"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="login-button" onClick={handleLogin} style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff', marginBottom:'10px'}}>
          Ingresar
        </button>

        
      </form>
    </div>
  );
}

export default Login;


