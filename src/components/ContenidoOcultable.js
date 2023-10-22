import React, { useState } from 'react';
import './BotonBonito.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function ContenidoOcultable({ titulo, motivo, explicacion, doctor}) {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  return (
    <div>
      <h4 style={{ textAlign: 'left', marginLeft: '20%', marginTop: '2%' }}>
        {titulo}
        <button className={`boton-bonito ${mostrarContenido ? 'boton-rojo' : ''}`} style={{marginLeft: '5%', marginTop: '0%' }} onClick={() => setMostrarContenido(!mostrarContenido)}>
            {mostrarContenido ? 'Ocultar' : 'Expandir'}
        </button>
      </h4>
      
      {mostrarContenido && (
        <div className='border p-3 rounded' style={{marginBottom: '2%', marginLeft: '30%', marginRight: '30%'}}>
            <div className='row-justify-content-center'>
            <h5 style={{ textAlign: 'left', marginLeft: '3%', marginTop: '1%' }}>{motivo}</h5>
            <p style={{ textAlign: 'left', marginLeft: '6%', marginTop: '1%' }}>{explicacion}</p>
            <p style={{ textAlign: 'left', marginLeft: '6%', marginTop: '1%' }}>Profesional: {doctor}</p>
            </div>
        </div>
      )}
    </div>
  );
}

export default ContenidoOcultable;
