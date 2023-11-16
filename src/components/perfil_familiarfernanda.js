import React from 'react';
import Sidebar from './Sidebar';
import './informacion_personal.css';
import { useNavigate } from 'react-router-dom';
import fotoPerfil from '../imagenes/perfilfernanda.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Index() {

  const navigate = useNavigate();
  return (
    
      
      <Sidebar>

        <div className='cuerpo'>
        
          <h2 className='h1'style={{ textAlign: 'left', marginLeft: '15%', marginTop: '0%' }}>Información Personal</h2>

          <div className="profile">
            <div className="profile" style={{marginRight:'39%'}}>
              <div className="profile-card">
                <img src={fotoPerfil} alt="fotoPerfil" className="profile-photo" />
                <h3 className="profile-title">Fernada Hernandez</h3>
                <p><strong>Numero de identificacion (DNI):</strong> 20345678-9</p>
                <p><strong>Fecha Nacimiento:</strong> 02/02/2008</p>
                <p><strong>Genero:</strong> Mujer</p>
                <p><strong>Direccion:</strong> Calle Falsa 123</p>
                <p><strong>Alergias:</strong> Ninguna</p>
                <p><strong>Intolerancias alimenticias:</strong> Ninguna</p>
                <p><strong>Medicación crónica:</strong> Ninguna</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>

            <button
              className="btn float-left"
              style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff', marginLeft: '20%'}}
              onClick={() => navigate('/modificar_fernanda.js')}>
              Modificar 
            </button>

            <button
              className="btn float-left"
              style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff', marginLeft:'20px'}}
              onClick={() => navigate('/grupo_familiar.js')}>
              Volver
            </button>

          </div>

        </div>

      </Sidebar>

      
    
  );
}

export default Index;