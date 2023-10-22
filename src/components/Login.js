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
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form className="login-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Correo Electrónico"
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
        <button type="button" className="login-button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default Login;


