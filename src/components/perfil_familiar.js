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
        
        <h2 className='h1'style={{ textAlign: 'left', marginLeft: '15%', marginTop: '0%' }}>Perfil Completo</h2>
        

        <div className="container" style={{marginRight:'30%'}}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="border p-4">
                <p style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Nombre completo: *nombre persona actual* </p>
                <p style={{ textAlign: 'left', marginLeft: '0%', marginTop: '5%' }}>Numero de intentificacion (DNI): *DNI persona actual*</p>
                <p style={{ textAlign: 'left', marginLeft: '0%', marginTop: '5%' }}>Fecha nacimiento: *fecha persona actual*</p>
                <p style={{ textAlign: 'left', marginLeft: '0%', marginTop: '5%' }}>Genero: *genero de la persona actual*</p>                
                <p style={{ textAlign: 'left', marginLeft: '0%', marginTop: '5%' }}>Parentesco: *parentesco entre usuario y persona actual*</p>                
                <p style={{ textAlign: 'left', marginLeft: '0%', marginTop: '5%' }}>Direccion: *direccion persona actual*</p>                
              </div>
            </div>
          </div>
        </div>

        <br></br>

        <div style={{ display: 'flex', alignItems: 'left' }}>

          <button
            className="btn float-left"
            style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff', marginLeft: '20%'}}
            onClick={() => navigate('/modificar_familiar.js')}>
            Mofificar datos
          </button>

          <button
            className="btn float-left"
            style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff', marginLeft:'20px'}}
            onClick={() => navigate('/grupo_familiar.js')}>
            Volver
          </button>

        </div>

        
        
      </div>
    </div>
  );
}

export default Index;