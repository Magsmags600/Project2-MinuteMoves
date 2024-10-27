// src/components/Footer.tsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Footer.css';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark">
      <Container>
        <Navbar variant="dark">
          <Nav className="me-auto footer-nav">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
          </Nav>
        </Navbar>
        <div className="text-center text-white">
          &copy; {new Date().getFullYear()} Fitness Tracker. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
