import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="dark" variant="dark" id="sidebar">
        <Nav className="flex-column">
          <Navbar.Brand>
          <h2>Menu</h2>
          </Navbar.Brand>
          <br></br>
          <br></br>
          <Nav.Link className="nav-link">
            <button
              className="btn"
              style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff' }}
              onClick={() => navigate('/informacion_personal.js')}>
              Informacion Personal
            </button>
          </Nav.Link>

          <br></br>

          <Nav.Link className="nav-link">
            <button
              className="btn"
              style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff' }}
              onClick={() => navigate('/historial_personal.js')}>
              Historial Medico
            </button>
          </Nav.Link>

          <br></br>

          <Nav.Link className="nav-link">
            <button
              className="btn"
              style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff' }}
              onClick={() => navigate('/grupo_familiar.js')}>
              Grupo Familiar
            </button>
          </Nav.Link>

          <br></br>

          <Nav.Link className="nav-link">
            <button
              className="btn"
              style={{ width: '200px', backgroundColor:'#5A7684', color: '#fff' }}
              onClick={() => navigate('/Login.js')}>
              Cerrar Sesion
            </button>
          </Nav.Link>
          
        </Nav>
      </Navbar>
    </div>
  );
}

export default Sidebar;