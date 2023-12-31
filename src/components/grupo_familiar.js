import React from 'react';
import Sidebar from './Sidebar';
import './Index.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 


function Index() {

  const navigate = useNavigate();
  return (
    <Sidebar>

<div className='cuerpo'>
        
        
        <h2 className='h1'style={{ textAlign: 'left', marginLeft: '5%', marginTop: '0%' }}>Miembros Grupo Familiar</h2>
        

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="border p-4">

                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%'}}>Nombre: Fernanda Lopez Fernandez</p>
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Parentesco: Hijo(a)</p>
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Edad: 15 años</p>
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Fecha inscripcion: 18/07/2021</p>                

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button
                    className="btn"
                    style={{ color: '#5A7684', justifyContent: 'right', }}
                    onClick={() => navigate('/perfil_familiarfernanda.js')}>
                    Perfil completo
                  </button>

                  <button
                    className="btn"
                    style={{ color: '#5A7684', justifyContent: 'right', }}
                    onClick={() => navigate('/historial_familiar.js')}>
                    Historial Medico
                  </button>  
                                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <br></br>

        <div className="container" >
          <div className="row">
            <div className="col-md-6">
              <div className="border p-4">
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Nombre: Juan Hernandez Fernandez</p>
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Parentesco: Hermano(a)</p>
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Edad: 45 años</p>
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Fecha inscripcion: 06/01/1997</p>                

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button
                    className="btn"
                    style={{ color: '#5A7684', justifyContent: 'right', }}
                    onClick={() => navigate('/perfil_familiar.js')}>
                    Perfil completo
                  </button>

                  <button
                    className="btn disabled"
                    style={{ color: '#5A7684', justifyContent: 'right', }}
                    onClick={() => navigate('/historial_familiar.js')}>
                    Historial Medico
                  </button>

                  

                </div>
              </div>
            </div>
          </div>
        </div>

        <br></br>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="border p-4">
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Nombre: Jorge Hernandez Guajardo</p>
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Parentesco: Padre / Madre</p>
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Edad: 79 años</p>
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Fecha inscripcion: 18/08/1996</p>                

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button
                    className="btn"
                    style={{ color: '#5A7684', justifyContent: 'right', }}
                    onClick={() => navigate('/perfil_familiar.js')}>
                    Perfil completo
                  </button>

                  <button
                    className="btn disabled"
                    style={{ color: '#5A7684', justifyContent: 'right', }}
                    onClick={() => navigate('/historial_familiar.js')}>
                    Historial Medico
                  </button>

                  

                </div>
              </div>
            </div>
          </div>
        </div>

        <br></br>

        <button
          className="btn float-left"
          style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff', marginRight: '70%', marginBottom:'10px'}}
          onClick={() => navigate('/Index.js')}>
          Volver
      </button>
      </div>

    </Sidebar>
  );
}

export default Index;