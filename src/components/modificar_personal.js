import React from 'react';
import Sidebar from './Sidebar';
import './Index.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Index() {

  const navigate = useNavigate();
  return (
    <Sidebar>

      <div className='cuerpo'>
        <h2 className='h1'style={{ textAlign: 'left', marginLeft: '5%', marginTop: '0%' }}>Modificando datos personales</h2>
       

        <div className="container">
          <div className="row justify-content-left" style={{marginLeft:'5%'}}>
            <div className="col-md-6" >
              <form style={{ textAlign: 'left'}}>
                <div className="form-group">
                  <label htmlFor="nombre" >Nombre Completo</label>
                  <input type="text" className="form-control" id="nombre" />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Numero de identificacion (DNI)</label>
                  <input type="email" className="form-control" id="email" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Fecha Nacimiento</label>
                  <input type="email" className="form-control" id="email" />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Genero</label>
                  <input type="email" className="form-control" id="email" />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Parentesco</label>
                  <input type="email" className="form-control" id="email" />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Direccion</label>
                  <input type="email" className="form-control" id="email" />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Alergias</label>
                  <input type="email" className="form-control" id="email" />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Intolerancias alimenticias</label>
                  <input type="email" className="form-control" id="email" />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Medicacion cronica</label>
                  <input type="email" className="form-control" id="email" />
                </div>

                
              </form>
            </div>
          </div>
        </div>

        <br></br>

        <div style={{ display: 'flex', alignItems: 'left' }}>

          <button
            className="btn float-left"
            style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff', marginLeft: '20%', marginBottom:'10px' }}
            onClick={() => navigate('/informacion_personalmodificada.js')}>
            Modificar 
          </button>

          <button
            className="btn float-left"
            style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff', marginLeft:'20px', marginBottom:'10px'}}
            onClick={() => navigate('/informacion_personal.js')}>
            Volver
          </button>

        </div>

      </div>

    </Sidebar>
  );
}

export default Index;