import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
import logo from '../imagenes/logo.png';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

function Sidebar( { children } ) {
  const navigate = useNavigate();

  const VolverALogin = () => {
    // Cambia la ubicación actual de la página a la URL de Google
    window.location.href = 'http://localhost:3000/';
  };
  return (
    <Container fluid className="p-0">

      {/* Barra Superior */}
      <Navbar bg="dark" variant="dark" className="py-5 d-flex align-items-center">
        <div style={{ position: 'relative', width: '7%', marginLeft: '5%' }}>
          <NavLink to="/Index.js">
            <img src={logo} alt="Logo" className="img-fluid" style={{ width: '100%' }} />
          </NavLink>
        </div>
        <Navbar.Brand className='mx-auto fs-1'>Clinica Generica</Navbar.Brand>
      </Navbar>

      <Container fluid className="p-0 d-flex">
        {/* Barra lateral vertical */}

        <Nav className="col-md-2 d-none d-md-block bg-dark sidebar">
          <div className="position-sticky" style={{ height: '100vh' }}>
            <ul className="nav flex-column mt-4">
              
              <h2 className="text-white fs-1 text-center">
                Menu
              </h2>
              <br></br><br></br><br></br>

              <li className="nav-item">
                <Nav.Link className="nav-link">
                  <button
                    className="btn w-75"
                    style={{ backgroundColor: '#5A7684', color: '#fff'}}
                    onClick={() => navigate('/informacion_personal.js')}>
                    Informacion Personal
                  </button>
                </Nav.Link>
              </li>

              <li className="nav-item">
                <Nav.Link className="nav-link">
                  <button
                    className="btn w-75"
                    style={{ backgroundColor: '#5A7684', color: '#fff' }}
                    onClick={() => navigate('/historial_personal.js')}>
                    Historial Medico
                  </button>
                </Nav.Link>
              </li>

              <li className="nav-item">
                <Nav.Link className="nav-link">
                  <button
                    className="btn w-75"
                    style={{ backgroundColor: '#5A7684', color: '#fff', padding: 10 }}
                    onClick={() => navigate('/grupo_familiar.js')}>
                    Grupo Familiar
                  </button>
                </Nav.Link>
              </li>

              <li className="nav-item">
                <Nav.Link className="nav-link">
                  <button
                    className="btn w-75"
                    style={{ backgroundColor: '#5A7684', color: '#fff' }}
                    onClick={VolverALogin}>
                    Cerrar Sesion
                  </button>
                </Nav.Link>
              </li>
            </ul>
          </div>
        </Nav>

        {/* Contenido principal */}
        <main className="col-md-10">
          {children}
        </main>
      </Container>
    </Container>
  );
}

export default Sidebar;