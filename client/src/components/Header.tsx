// src/components/Header.tsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Link } from 'react-router-dom';
const Header: React.FC = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Fitness Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Sign Out</Nav.Link>
              <Nav.Link as={Link} to="/mealpage">Meal Plan</Nav.Link>
              <Nav.Link as={Link} to="/fitnesspage">Fitness Page</Nav.Link> {/* Consistent path */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
