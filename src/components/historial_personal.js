import React from 'react';
import Sidebar from './Sidebar';
import './Index.css';
import { useNavigate } from 'react-router-dom';
import ContenidoOcultable from './ContenidoOcultable';

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
        
        <h2 className='h1'style={{ textAlign: 'left', marginLeft: '15%', marginTop: '0%' }}>Historial Médico</h2>
        <ContenidoOcultable titulo="Visita 14 de Enero 2022" motivo="Examenes de rutina" explicacion="Paciente agenda hora para exámen pos sospechas de enfermedad, se encuentran hallazgos y se deriva al paciente a realizar exámenes" doctor="Dr. Cristiano Ronaldo dos Santos Aveiro"/>
        <ContenidoOcultable titulo="Visita 19 de Enero 2022" motivo="Detección de Enferemedad" explicacion="Exámenes arrojan resultados negativos, se procede a realizar estudios clínicos" doctor="Dr. Cristiano Ronaldo dos Santos Aveiro"/>
        <ContenidoOcultable titulo="Visita 29 de Enero 2022" motivo="Asiganción de Medicamentos" explicacion="Tras análisis clínico se le asigna medicamento al paciente y se le otorgan instrucciones de cuidados a sus tutores" doctor="Dr. Cristiano Ronaldo dos Santos Aveiro"/>
        <ContenidoOcultable titulo="Visita 31 de Julio 2022" motivo="Control de rutina" explicacion="Se realiza control al paciente, no existen cambios en el tratamiento puesto que la evolución de la enfermedad es positiva, mantener medicamentos" doctor="Dr. Cristiano Ronaldo dos Santos Aveiro"/>
        <ContenidoOcultable titulo="Visita 5 de Marzo 2023" motivo="Control de rutina" explicacion="Se realiza control al paciente, no existen cambios en el tratamiento puesto que la evolución de la enfermedad es positiva, mantener medicamentos" doctor="Dr. Cristiano Ronaldo dos Santos Aveiro"/>
        
      </div>

      <br></br>

      <button
          className="btn float-left"
          style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff', marginRight: '51%', marginBottom:'10px'}}
          onClick={() => navigate('/Index.js')}>
          Volver
      </button>

      

    </div>
  );
}

export default Index;