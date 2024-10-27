import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeaderFooter from './pages/HeaderFooter';
import LandingPage from './pages/landingpage';

function App() {
  return (
    <div>
      <HeaderFooter /> {/* Header and Footer will display on every page */}
      <Navbar /> {/* Navbar for site-wide navigation */}
      <LandingPage /> {/* Landing page, can be conditionally rendered if needed */}
      
      <main className='container pt-5'>
        <Outlet /> {/* This renders the current route component */}
      </main>
    </div>
  );
}

export default App;
