import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/Logopic.png';

const Header: React.FC = () => {
  return (
    <header className="custom-header">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          {/* Logo and Brand Name */}
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              width="170" 
              height="50"
              className="d-inline-block align-top"
            />
            <span className="ms-2 large-brand-name">MinuteMoves</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar" className="justify-content-end">
            {/* Right-aligned Links */}
            <div className="right-links">
              <Link to="/fitnesspage" className="text-light me-3">Your Plan</Link>
              <Link to="/mealpage" className="text-light me-3">Your Meal</Link>
              <Link to="/Login" className="text-light me-3">Login</Link>
              <Link to="/CreateAccount" className="text-light">Create Account</Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
