import React from 'react';
import Sidebar from './Sidebar';
import './informacion_personal.css';
import { useNavigate } from 'react-router-dom';
import fotoPerfil from '../imagenes/FotoPerfil.jpg';
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
        
        <h2 className='h1'style={{ textAlign: 'left', marginLeft: '15%', marginTop: '0%' }}>Información Personal</h2>
        <div className="profile">
      <div className="profile" style={{marginRight:'39%'}}>
        <div className="profile-card">
        <img src={fotoPerfil} alt="Foto de perfil" className="profile-photo" />
          <h3 className="profile-title">Hernan Hernandez Ibarra</h3>
          <p><strong>Numero de identificacion (DNI):</strong> 12345678-9</p>
          <p><strong>Fecha Nacimiento:</strong> 01/01/1980</p>
          <p><strong>Genero:</strong> Hombre</p>
          <p><strong>Direccion:</strong> Avenida siempre viva 123</p>
          <p><strong>Alergias:</strong> Ninguna</p>
          <p><strong>Intolerancias alimenticias:</strong> Gluten</p>
          <p><strong>Medicación crónica:</strong> Ninguna</p>
        </div>
      </div>

    <br></br><br></br>

    </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>

          <button
            className="btn float-left"
            style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff', marginLeft: '20%'}}
            onClick={() => navigate('/modificar_personal.js')}>
            Modificar 
          </button>

          <button
            className="btn float-left"
            style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff', marginLeft:'20px'}}
            onClick={() => navigate('/Index.js')}>
            Volver
          </button>

        </div>
    </div>
  );
}

export default Index;