import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';
import './Navbar.css';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    setLoginCheck(auth.loggedIn());
  };

  useEffect(() => {
    checkLogin();
  }, []); // Run only once on component mount

  return (
    <div className="navbar-container d-flex justify-content-between align-items-center py-3 px-5">
      <h1 className="navbar-title">Authentication Review</h1>
      <div>
        {!loginCheck ? (
          <Link to="/login" className="btn navbar-btn">
            Login
          </Link>
        ) : (
          <button
            className="btn navbar-btn"
            type="button"
            onClick={() => {
              auth.logout();
              setLoginCheck(false);
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
