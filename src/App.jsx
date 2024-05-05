import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {  useSelector } from "react-redux";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import PokeSection from "./pages/PokeSection";
import CardsText from "./pages/CardsText";
import PokedexBanner from "./pages/PokedexBanner";
import PokeCards from "./pages/PokeCards";
import Login from "./pages/Login";
import "./App.css";
import SignUp from "./pages/SignUp";

const App = () => {
  const [showHomePage, setShowHomePage] = useState(true);
  const [showPokedex, setShowPokedex] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSignUpPage, setShowSignUpPage] = useState(false);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated); // Get isAuthenticated from Redux state

  useEffect(() => {
    if (!isAuthenticated && !showSignUpPage) {
      setShowLoginPage(true);
    }
  }, [isAuthenticated, showSignUpPage]);

  const navigateToPokedex = () => {
    setShowHomePage(false);
    setShowPokedex(true);
    setShowSignUpPage(false);
  };

  const navigateToHomePage = () => {
    setShowHomePage(true);
    setShowPokedex(false);
    setShowSignUpPage(false);
  };

  const navigateToLoginPage = () => {
    setShowHomePage(false);
    setShowLoginPage(true);
    setShowPokedex(false);
    setShowSignUpPage(false);
  };

  const navigateToSignUpPage = () => {
    setShowHomePage(false);
    setShowPokedex(false);
    setShowSignUpPage(true);
  };

  const handleSubmitLogin = () => {
    navigateToHomePage();
  };

  const handleSubmitSignUp = () => {
    navigateToLoginPage();
  };

  return (
      <Router>
        <Navbar
          navigateToPokedex={navigateToPokedex}
          navigateToHomePage={navigateToHomePage}
          navigateToLoginPage={navigateToLoginPage}
          navigateToSignUpPage={navigateToSignUpPage}
        />

        {isAuthenticated ? (
          <>
            {showHomePage && (
              <>
                <PokeSection />
                <CardsText />
                <PokedexBanner />
              </>
            )}
            {showPokedex && <PokeCards />}
          </>
        ) : (
          <>
            {showSignUpPage ? (
              <SignUp submitSignUp={handleSubmitSignUp} />
            ) : (
              showLoginPage && <Login submitLogin={handleSubmitLogin} />
            )}
          </>
        )}
        <Footer />
      </Router>
  );
};

export default App;
