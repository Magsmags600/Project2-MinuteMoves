// // import { Outlet } from 'react-router-dom';
// // import Header from './components/Header';
// // import Footer from './components/Footer';
// // import Navbar from './components/Navbar';
// // import LandingPage from './pages/landingpage';

// // function App() {
// //   return (
// //     <div>
// //       <Header /> {/* Header will display on every page */}
// //       <Navbar /> {/* Navbar for site-wide navigation */}
      
// //       {/* Optional: Render LandingPage here if it's intended to be global */}
// //       <LandingPage /> 
      
// //       <main className="container pt-5">
// //         <Outlet /> {/* Renders the current route's component */}
// //       </main>

// //       <Footer /> {/* Footer will display on every page */}
// //     </div>
// //   );
// // }

// // export default App;
// import { Outlet } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// // import Navbar from './components/Navbar';


// function App() {
//   return (
//     <div>
//       <Header /> {/* Displayed on every page */}
//       {/* <Navbar /> Displayed on every page for navigation */}
      
//       <main className="container pt-5">
//         <Outlet /> {/* Renders the current route's component */}
//       </main>

//       <Footer /> {/* Displayed on every page */}
//     </div>
//   );
// }

// export default App;
// src/App.tsx
// src/App.tsx

// src/App.tsx

// src/App.tsx

// src/App.tsx

// src/App.tsx

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/landingpage';
import Legal from './pages/Legal';

function App() {
  return (
    <div>
      <Header /> {/* Displayed on every page */}
      
      <main className="container pt-5">
        <Routes>
          {/* Route for the landing page */}
          <Route path="/" element={<LandingPage />} />

          {/* Routes for Legal component sections */}
          <Route path="/about" element={<Legal section="about" />} />
          <Route path="/privacy" element={<Legal section="privacy" />} />
          <Route path="/terms" element={<Legal section="terms" />} />
          <Route path="/contact" element={<Legal section="contact" />} />

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </main>

      <Footer /> {/* Displayed on every page */}
    </div>
  );
}

export default App;
