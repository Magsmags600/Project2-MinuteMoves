import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
// import Home from './pages/LoginCheck.tsx';
import Login from './pages/Login.tsx';
import LandingPage from './pages/landingpage.tsx';
import CreateAccount from './pages/CreateAccount.tsx';
import FitnessPage from './pages/FitnessPage.tsx';
import MealPage from './pages/MealPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/createaccount',
        element: <CreateAccount />,
      },
      {
        path: '/fitnesspage',
        element: <FitnessPage />,
      },
      {
        path: '/mealpage',
        element: <Mealpage />,
      },
      {
        path: '/mealpage',
        element: <Legal />,
      },
      {
        path: '/mealpage',
        element: <MealPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
