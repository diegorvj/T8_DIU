import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Sidebar from './Sidebar';
import Nav from 'react-bootstrap/Nav';
import CardGroup from 'react-bootstrap/CardGroup';
import g1 from '../imagenes/g1.jpg';
import g2 from '../imagenes/g2.jpeg';
import g3 from '../imagenes/g3.jpg';

const Index = () => {
  
  return (

    <Sidebar>

<h2 className='h1'style={{ textAlign: 'left', marginLeft: '5%', marginTop: '0%' }}>Sobre nosotros</h2>
      {/* Contenido principal aquí */}

      <CardGroup>

        <Card bg="dark" text="white" style={{marginLeft: '5%'}}>
          <Card.Img variant="top" src={g1} style={{ height: '300px' }}/>
          <Card.Body style={{backgroundColor: '#5A7684'}}>
            <Card.Title>Somos su clínica de confianza</Card.Title>
            <Card.Text>
            Contamos con un equipo de profesionales altamente capacitados que aseguran resultados precisos y confiables en todos los análisis. 
            </Card.Text>
          </Card.Body>
        </Card>

        <Card bg="dark" text="white">
          <Card.Img variant="top" src={g2} style={{ height: '300px' }}/>
          <Card.Body style={{backgroundColor: '#5A7684'}}>
            <Card.Title>Laboratorios de estándar mundial</Card.Title>
            <Card.Text>
            Nuestros laboratorios cuentan con tecnología de vanguardia y cumplen con los más altos estándares a nivel mundial. Estamos comprometidos con la excelencia en cada análisis y prueba diagnóstica que realizamos. 


            </Card.Text>
          </Card.Body>
        </Card>

        <Card bg="dark" text="white" style={{marginRight:'5%'}}>
          <Card.Img variant="top" src={g3} style={{ height: '300px' }}/>
          <Card.Body style={{backgroundColor: '#5A7684'}}>
            <Card.Title>Variedad de procedimientos y especialidades</Card.Title>
            <Card.Text>
            En nuestra clínica, ofrecemos una amplia variedad de procedimientos médicos y especialidades para satisfacer todas tus necesidades de salud. Desde consultas generales hasta tratamientos especializados, nuestro equipo de profesionales altamente calificados está aquí para brindarte atención personalizada y de calidad. 
            </Card.Text>
          </Card.Body>
        </Card>

    </CardGroup>
    </Sidebar>
  );
}

export default Index;