// // src/components/Footer.tsx

// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Footer.css';
// import { Link } from 'react-router-dom';
// import logo from '../assets/OpenAI-logo.png';

// const Footer: React.FC = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <div className="footer-content d-flex justify-content-between align-items-center">
//           {/* Left side content */}
//           <div className="footer-left d-flex align-items-center">
//             <img
//               src={logo}
//               alt="Logo"
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//             />
//             <span className="ms-2 text-light">Powered by ChatGPT</span>
//           </div>

//           {/* Right side content with link styling to match header */}
//           <Nav className="footer-nav d-flex">
//             <Link to="/about" className="text-light me-3 small-text">About</Link>
//             <Link to="/contact" className="text-light me-3 small-text">Contact</Link>
//             <Link to="/privacy" className="text-light me-3 small-text">Privacy Policy</Link>
//             <Link to="/terms" className="text-light small-text">Terms and Conditions</Link>
//           </Nav>
//         </div>

//         <div className="text-center text-light mt-3 copyright">
//           &copy; 2024 MinuteMoves. All rights reserved.
//         </div>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
// src/components/Footer.tsx

import React from 'react';
import { Nav, Container } from 'react-bootstrap'; // Removed Navbar import
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../assets/OpenAI-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content d-flex justify-content-between align-items-center">
          {/* Left side content */}
          <div className="footer-left d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <span className="ms-2 text-light">Powered by ChatGPT</span>
          </div>

          {/* Right side content with link styling to match header */}
          <Nav className="footer-nav d-flex">
            <Link to="/contact" className="text-light me-3 small-text">Contact</Link>
            <Link to="/legal" className="text-light small-text">Terms and Conditions</Link>
          </Nav>
        </div>

        <div className="text-center text-light mt-3 copyright">
          &copy; 2024 MinuteMoves. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
