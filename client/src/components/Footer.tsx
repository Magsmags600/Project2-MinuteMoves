// // src/components/Footer.tsx
// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Footer.css';

// const Footer: React.FC = () => {
//   return (
//     <footer className="footer bg-dark">
//       <Container>
//         <Navbar variant="dark">
//           <Nav className="me-auto footer-nav">
//             <Nav.Link href="/about">About</Nav.Link>
//             <Nav.Link href="/contact">Contact</Nav.Link>
//             <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
//           </Nav>
//         </Navbar>
//         <div className="text-center text-white">
//           &copy; {new Date().getFullYear()} Fitness Tracker. All rights reserved.
//         </div>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
// src/components/Footer.tsx

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark">
      <Container>
        <Navbar variant="dark">
          {/* Left side content */}
          <div className="footer-left">
            <img
              src="../assets/OpenAI-logo.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <span className="ms-2 text-white">Powered by ChatGPT</span>
          </div>

          {/* Right side content */}
          <Nav className="ms-auto footer-nav">
            <Nav.Link href="/about" className="text-white">About</Nav.Link>
            <Nav.Link href="/contact" className="text-white">Contact</Nav.Link>
            <Nav.Link href="/privacy" className="text-white">Privacy Policy</Nav.Link>
            <Nav.Link href="/terms" className="text-white">Terms and Conditions</Nav.Link>
          </Nav>
        </Navbar>

        <div className="text-center text-white mt-3">
          &copy; 2024 MinuteMoves. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
