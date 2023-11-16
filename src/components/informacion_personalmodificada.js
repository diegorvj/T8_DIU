import React from 'react';
import Sidebar from './Sidebar';
import './informacion_personal.css';
import { useNavigate } from 'react-router-dom';
import fotoPerfil from '../imagenes/FotoPerfil.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

function Index() {

  const navigate = useNavigate();
  return (
    
    <Sidebar>

      <h2 className='h1'style={{ textAlign: 'left', marginLeft: '5%', marginTop: '0%' }}>Informacion personal</h2>

      <Card className="m-4" bg="dark" text="white">
        <Card.Body>

          <div className="" style={{ textAlign: 'left' , marginLeft: 70}}>
          <img
            src={fotoPerfil}
            alt="Foto de perfil"
            style={{ width: '150px', height: '150px', marginRight: '1000px' }}  // Ajusta el ancho, alto y margen según tus necesidades
          /><br></br><br></br>
            <h3 className="profile-title">Hernan Hernandez Ibarra</h3>
            <p><strong>Numero de identificacion (DNI):</strong> 12345678-9</p>
            <p><strong>Fecha Nacimiento:</strong> 01/01/1980</p>
            <p><strong>Genero:</strong> Hombre</p>
            <p><strong>Direccion:</strong> Avenida siempre viva 123</p>
            <p><strong>Alergias:</strong> Ninguna</p>
            <p><strong>Intolerancias alimenticias:</strong> Gluten</p>
            <p><strong>Medicación crónica:</strong> Ninguna</p>
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              style={{ width: '200px', backgroundColor: '#5A7684', color: '#fff' }}
              onClick={() => navigate('/modificar_personal.js')}
            >
              Modificar
            </Button>
            <Button
              variant="primary"
              style={{ width: '200px', marginLeft: '20px', backgroundColor: '#5A7684', color: '#fff' }}
              onClick={() => navigate('/Index.js')}
            >
              Volver
            </Button>
          </div>
        </Card.Footer>
      </Card>
  
  </Sidebar>
      
  );
}

export default Index;

