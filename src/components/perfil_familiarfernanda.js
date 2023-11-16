import React from 'react';
import Sidebar from './Sidebar';
import './informacion_personal.css';
import { useNavigate } from 'react-router-dom';
import fotoPerfil from '../imagenes/perfilfernanda.jpg';
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
              />
              <br></br><br></br>
              <h3 className="profile-title">Fernada Hernandez</h3>
                <p><strong>Numero de identificacion (DNI):</strong> 20345678-9</p>
                <p><strong>Fecha Nacimiento:</strong> 02/02/2008</p>
                <p><strong>Genero:</strong> Mujer</p>
                <p><strong>Direccion:</strong> Calle Falsa 123</p>
                <p><strong>Alergias:</strong> Ninguna</p>
                <p><strong>Intolerancias alimenticias:</strong> Ninguna</p>
                <p><strong>Medicación crónica:</strong> Ninguna</p>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                style={{ width: '200px', backgroundColor: '#5A7684', color: '#fff' }}
                onClick={() => navigate('/modificar_fernanda.js')}
              >
                Modificar
              </Button>
              <Button
                variant="primary"
                style={{ width: '200px', marginLeft: '20px', backgroundColor: '#5A7684', color: '#fff' }}
                onClick={() => navigate('/grupo_familiar.js')}
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