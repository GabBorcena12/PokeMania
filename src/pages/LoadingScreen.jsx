import React from 'react';
import Logo from '../assets/images/pokeball-loading.gif';
import '../css/loading-screen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src={Logo} alt="Loading" />
    </div>
  );
};

export default LoadingScreen;
