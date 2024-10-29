// import { Outlet } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import LandingPage from './pages/landingpage';

// function App() {
//   return (
//     <div>
//       <Header /> {/* Header will display on every page */}
//       <Navbar /> {/* Navbar for site-wide navigation */}
      
//       {/* Optional: Render LandingPage here if it's intended to be global */}
//       <LandingPage /> 
      
//       <main className="container pt-5">
//         <Outlet /> {/* Renders the current route's component */}
//       </main>

//       <Footer /> {/* Footer will display on every page */}
//     </div>
//   );
// }

// export default App;
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import SuccessStories from './pages/SuccessStories'; // Adjust path as needed

// Inside App component routes
{/* <Route path="/successstories" component={SuccessStories} /> */}


function App() {
  return (
    <div>
      <Header /> {/* Displayed on every page */}
      {/* <Navbar /> Displayed on every page for navigation */}
      
      <main className="container pt-5">
        <Outlet /> {/* Renders the current route's component */}
      </main>

      <Footer /> {/* Displayed on every page */}
    </div>
  );
}

export default App;
