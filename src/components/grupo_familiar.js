import React from 'react';
import Sidebar from './Sidebar';
import './Index.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 


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
        
        <h2 className='h1'style={{ textAlign: 'left', marginLeft: '15%', marginTop: '0%' }}>Miembros Grupo Familiar</h2>
        

        <div className="container" style={{marginRight:'30%'}}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="border p-4">

                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%'}}>Nombre: Fernanda Lopez Fernandez</p>
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Parentesco: Hijo(a)</p>
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Edad: 15 años</p>
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Fecha inscricion: 18/07/2021</p>                

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button
                    className="btn"
                    style={{ color: '#5A7684', justifyContent: 'right', }}
                    onClick={() => navigate('/perfil_familiar.js')}>
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

        <div className="container" style={{marginRight:'30%'}}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="border p-4">
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Nombre: Juan Hernandez Fernandez</p>
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Parentesco: Hermano(a)</p>
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Edad: 45 años</p>
                <p className="text-dark" style={{ textAlign: 'left', marginLeft: '0%', marginTop: '0%' }}>Fecha inscricion: 06/01/1997</p>                

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
          style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff', marginRight: '51%'}}
          onClick={() => navigate('/Index.js')}>
          Volver
        </button>
      </div>
    </div>
  );
}

export default Index;