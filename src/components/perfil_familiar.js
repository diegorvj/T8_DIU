import React from 'react';
import Sidebar from './Sidebar';
import './Index.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import fotoPerfil from '../imagenes/perfilgenerico.png';

function Index() {

  const navigate = useNavigate();
  return (
    <Sidebar>

      <h2 className='h1'style={{ textAlign: 'left', marginLeft: '5%', marginTop: '0%' }}>Perfil completo</h2>

      <Card className="m-4" bg="dark" text="white">
        <Card.Body>

          <div className="" style={{ textAlign: 'left' , marginLeft: 70}}>
            <img
              src={fotoPerfil}
              alt="Foto de perfil"
              style={{ width: '150px', height: '150px', marginRight: '1000px' }}  // Ajusta el ancho, alto y margen según tus necesidades
            />
            <br></br><br></br>
            <h3 className="profile-title">*nombre persona actual*</h3>
            <p><strong>Numero de identificacion (DNI):</strong> *DNI persona actual*</p>
            <p><strong>Fecha Nacimiento:</strong> *fecha persona actual*</p>
            <p><strong>Genero:</strong> *genero de la persona actual*</p>
            <p><strong>Parentesco:</strong> *parentesco entre usuario y persona actual*</p>
            <p><strong>Direccion:</strong> *direccion persona actual*</p>
            <p><strong>Alergias:</strong> *alergias persona actual*</p>
            <p><strong>Intolerancias alimenticias:</strong> *intolerancias persona actual*</p>
            <p><strong>Medicación crónica:</strong> *medicacion cronica persona actual*</p>
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              style={{ width: '200px', backgroundColor: '#5A7684', color: '#fff' }}
              onClick={() => navigate('/modificar_familiar.js')}
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