import React from 'react';
import Sidebar from './Sidebar';
import './Index.css';
import { useNavigate } from 'react-router-dom';

function Index() {

  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className='cuerpo'>
        
          <div className='titulo' style={{ display: 'flex', alignItems: 'center' }}>

          <button
            className="btn"
            style={{ color: '#fff', justifyContent: 'left', paddingLeft: '4.5%' }}
            onClick={() => navigate('/Index.js')}>
            Pagina Principal
          </button>

            
            
            <h1 className='h1' style={{ color:'#fff', paddingLeft:'33%'}}>CLINICA GENERICA</h1>
            
          </div>
        
            <h2 className='h1'style={{ textAlign: 'left', marginLeft: '15%', marginTop: '0%' }}>Somos su clínica de confianza</h2>
            <p className='text-dark' style={{ textAlign: 'left', marginLeft: '20%', marginTop: '0%' }}>Pioneros en tratamientos</p>
            <p className='text-dark' style={{ textAlign: 'left', marginLeft: '20%', marginTop: '0%' }}>Contamos con los mejores profesionales del país</p>
            <p className='text-dark' style={{ textAlign: 'left', marginLeft: '20%', marginTop: '0%' }}>Laboratorios de estándar mundial</p>
            <p className='text-dark' style={{ textAlign: 'left', marginLeft: '20%', marginTop: '0%' }}>Variedad de procedimientos y especialidades</p>
          </div>
    </div>
  );
}

export default Index;

