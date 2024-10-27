import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/HeaderFooter.css';

const HeaderFooter: React.FC = () => {
  return (
    <>
      {/* Header Section */}
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

      {/* Main content will go here */}
      <main>
        {/* Add main content here */}
      </main>

      {/* Footer Section */}
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
    </>
  );
};
// commit changes

export default HeaderFooter;
