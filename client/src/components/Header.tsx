// src/components/Header.tsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/components/Footer.css';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Fitness Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/workouts">Workouts</Nav.Link>
              <Nav.Link href="/meals">Meals</Nav.Link>
              <Nav.Link href="/progress">Progress</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
