
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


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


