import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../imagenes/logo.png';
import Sidebar from './Sidebar';

const VolverALogin = () => {
  // Cambia la ubicación actual de la página a la URL de Google
  window.location.href = 'http://localhost:3000/';
};

const Index = () => {
  const navigate = useNavigate();
  return (

    <Sidebar>
      {/* Contenido principal aquí */}
      <h2 className='h1'style={{ textAlign: 'left', marginLeft: '15%', marginTop: '0%' }}>Somos su clínica de confianza</h2>
      <p className='text-dark' style={{ textAlign: 'left', marginLeft: '20%', marginTop: '0%' }}>Pioneros en tratamientos</p>
      <p className='text-dark' style={{ textAlign: 'left', marginLeft: '20%', marginTop: '0%' }}>Contamos con los mejores profesionales del país</p>
      <p className='text-dark' style={{ textAlign: 'left', marginLeft: '20%', marginTop: '0%' }}>Laboratorios de estándar mundial</p>
      <p className='text-dark' style={{ textAlign: 'left', marginLeft: '20%', marginTop: '0%' }}>Variedad de procedimientos y especialidades</p>
    </Sidebar>
    
   
    
  );
}

export default Index;