// // src/components/Header.tsx
// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Header.css';
// import { Link } from 'react-router-dom';
// const Header: React.FC = () => {
//   return (
//     <header>
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Container>
//           <Navbar.Brand href="/">Fitness Tracker</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbar" />
//           <Navbar.Collapse id="navbar">
//           <Nav className="me-auto">
//               <Nav.Link as={Link} to="/">Sign Out</Nav.Link>
//               <Nav.Link as={Link} to="/mealpage">Meal Plan</Nav.Link>
//               <Nav.Link as={Link} to="/fitnesspage">Fitness Page</Nav.Link> {/* Consistent path */}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;
// src/components/Header.tsx

import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          {/* Placeholder for Logo */}
          <Navbar.Brand href="/">
            <img
              src="client\src\assets\a49e2f20-d56d-4bc6-a68e-bcbfcc882b75.webp"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' '}MinuteMoves
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/fitnesspage">Fitness Page</Nav.Link>
              <Nav.Link as={Link} to="/mealpage">Meal Plan</Nav.Link>
              {/* <Nav.Link as={Link} to="/">Sign Out</Nav.Link> */}
            </Nav>
            {/* Placeholder for Login Button */}
            <Button variant="outline-light" className="ms-auto">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
