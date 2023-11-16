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

      <ContenidoOcultable titulo="Visita 14 de Enero 2022" motivo="Examenes de rutina" explicacion="Paciente agenda hora para exámen pos sospechas de enfermedad, se encuentran hallazgos y se deriva al paciente a realizar exámenes" doctor="Dr. Cristiano Troncoso"/>
      <ContenidoOcultable titulo="Visita 19 de Enero 2022" motivo="Detección de Enferemedad" explicacion="Exámenes arrojan resultados negativos, se procede a realizar estudios clínicos" doctor="Dra. Maria Jose Sanchez"/>
      <ContenidoOcultable titulo="Visita 29 de Enero 2022" motivo="Asiganción de Medicamentos" explicacion="Tras análisis clínico se le asigna medicamento al paciente y se le otorgan instrucciones de cuidados a sus tutores" doctor="Dr. Jose Alfaro"/>
      <ContenidoOcultable titulo="Visita 31 de Julio 2022" motivo="Control de rutina" explicacion="Se realiza control al paciente, no existen cambios en el tratamiento puesto que la evolución de la enfermedad es positiva, mantener medicamentos" doctor="Dr. Ruben Diaz"/>
      <ContenidoOcultable titulo="Visita 5 de Marzo 2023" motivo="Control de rutina" explicacion="Se realiza control al paciente, no existen cambios en el tratamiento puesto que la evolución de la enfermedad es positiva, mantener medicamentos" doctor="Dr. Juan Gomez"/>

      <br></br>

      <button
          className="btn float-left"
          style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff', marginRight: '70%', marginBottom:'10px'}}
          onClick={() => navigate('/Index.js')}>
          Volver
      </button>

    </Sidebar>
  );
}

export default Index;