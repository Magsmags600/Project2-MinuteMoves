import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />    
      <main className="container pt-5">
        <Outlet /> 
      </main>
      <Footer /> 
    </div>
  );
}

export default App;


