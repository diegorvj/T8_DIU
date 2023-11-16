import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';

const Index = () => {
  
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