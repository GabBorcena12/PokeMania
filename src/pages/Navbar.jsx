import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../actions/userAction'; 
import logo from '../assets/images/pokeball.png';

const Navbar = ({ navigateToPokedex, navigateToHomePage, navigateToLoginPage, navigateToSignUpPage }) => {  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user); // Assuming you have a user object in your Redux state

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigateToLoginPage(); // Navigate to login page
  };
  
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-logo">
              <Link to="/pokedex" className='pokemonText' style={{fontSize: 'xx-large', textDecoration: 'none'}} onClick={navigateToHomePage}>
                <img src={logo} className="Logo" alt="Logo" />
              </Link>
              <div className='navbar-authenticate-list'>
                {user ? (
                  <div>
                    <span className='navbar-text'>Welcome, {user.username}</span>
                    <Link to="/" className='navbar-text' onClick={handleLogout}>Logout</Link>
                  </div>
                ) : (
                  <>
                    <Link to="/login" className='navbar-text' onClick={navigateToLoginPage}>Login</Link>
                    <Link to="/signup" className='navbar-text' onClick={navigateToSignUpPage}>Sign up</Link>
                  </>
                )}
              </div>
            </div>
            <ul className="nav-list">
                {/* Use Link instead of <a> for routing */}
                <Link to="/pokedex" className='pokemonText' style={{fontSize: 'xx-large', textDecoration: 'none'}} onClick={navigateToPokedex}>PokéMania</Link>
            </ul>
        </div>        
    </nav>
  );
};

export default Navbar;
