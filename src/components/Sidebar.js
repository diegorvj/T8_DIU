import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Sidebar.css';

function Sidebar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" id="sidebar">
        <Nav className="flex-column">
          <Navbar.Brand href="#home">Menú Lateral</Navbar.Brand>
          <Nav.Link href="index.js">Item 1</Nav.Link>
          <Nav.Link href="#item2">Item 2</Nav.Link>
          <Nav.Link href="#item3">Item 3</Nav.Link>
          <NavDropdown title="Submenú">
            <NavDropdown.Item href="#subitem1">Subitem 1</NavDropdown.Item>
            <NavDropdown.Item href="#subitem2">Subitem 2</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      <div className="content">
        {/* Contenido principal */}
      </div>
    </div>
  );
}

export default Sidebar;