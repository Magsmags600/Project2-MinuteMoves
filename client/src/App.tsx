import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeaderFooter from './pages/HeaderFooter';  

function App() {
  return (
    <div>
      <HeaderFooter />
      {/* <Navbar />
      <main className='container pt-5'>
        <Outlet />
      </main> */}
    </div>
  );
}

export default App;
