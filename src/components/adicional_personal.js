import React from 'react';
import Sidebar from './Sidebar';
import './Index.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        
        <h2 className='h1'style={{ textAlign: 'left', marginLeft: '15%', marginTop: '0%' }}>agregar contenido dependiendo de vista</h2>
        <p style={{ textAlign: 'left', marginLeft: '20%', marginTop: '0%' }}>contenido</p>
        <p style={{ textAlign: 'left', marginLeft: '20%', marginTop: '0%' }}>contenido</p>
        <p style={{ textAlign: 'left', marginLeft: '20%', marginTop: '0%' }}>contenido</p>
        <p style={{ textAlign: 'left', marginLeft: '20%', marginTop: '0%' }}>contenido</p>
      </div>
    </div>
  );
}

export default Index;