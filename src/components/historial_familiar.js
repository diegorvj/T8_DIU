import React from 'react';
import Sidebar from './Sidebar';
import './Index.css';
import { useNavigate } from 'react-router-dom';
import ContenidoOcultable from './ContenidoOcultable';
import 'bootstrap/dist/css/bootstrap.min.css';

function Index() {

  const navigate = useNavigate();
  return (
    <Sidebar>

      <h2 className='h1'style={{ textAlign: 'left', marginLeft: '5%', marginTop: '0%' }}>Historial Médico</h2>

      <ContenidoOcultable titulo="Visita 5 de Agosto 2008" motivo="Detección de Enferemedad" explicacion="Paciente agenda hora para exámen pos sospechas de enfermedad, no se encuentran hallazgos" doctor="Dr. Jose Alfaro"/>
      <ContenidoOcultable titulo="Visita 26 de Noviembre 2010" motivo="Control de rutina" explicacion="Se realiza control al paciente, se requieren cambios en el tratamiento puesto que la evolución de la enfermedad es negativa." doctor="Dr. Tomas Molina"/>
      <ContenidoOcultable titulo="Visita 17 de Julio 2012" motivo="Asiganción de Medicamentos" explicacion="Tras análisis clínico se le asigna medicamento al paciente y se le otorgan instrucciones de cuidados a sus tutores" doctor="Dr. Jorge Olivares"/>
      <ContenidoOcultable titulo="Visita 12 de Mayo 2020" motivo="Examenes de rutina" explicacion="Exámenes arrojan resultados negativos, se procede a realizar estudios clínicos" doctor="Dr. Juninho Sosa"/>

      <br></br>

      <button
          className="btn float-left"
          style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff', marginRight: '70%', marginBottom:'10px'}}
          onClick={() => navigate('/grupo_familiar.js')}>
          Volver
      </button>

    </Sidebar>


  );
}

export default Index;