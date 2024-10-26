import { Outlet } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HeaderFooter from './pages/HeaderFooter';  
// import LandingPage from './pages/landingpage';

function App() {
  return (
    <div>
      {/* <HeaderFooter />
      <LandingPage/>
      {/* <Navbar /> */}
      <main className='container pt-5'>
        <Outlet />
      </main> 
    </div>
  );
}

export default App;
