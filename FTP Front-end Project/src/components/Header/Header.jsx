import React from "react";
import { Link } from "react-router-dom";
import ReactLogo from "../../assets/react.svg";
import "./Header.css";

const Header = ({ isLoggedIn, onSignInModal, onSignUpModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={ReactLogo} alt="Logo" />
        </Link>
        <p>Search Bar Is Here</p>
      </div>
      <div className="header__description">
        {isLoggedIn ? (
          <></>
        ) : (
          <>
            <button type="text" className="header__games">
              My Games
            </button>
            <button type="text" className="header__stufff">
              ahbaiuewjhad
            </button>
            <button
              type="text"
              className="header__signin"
              onClick={onSignInModal}
            >
              Sign In
            </button>
            <button
              type="text"
              className="header__signup"
              onClick={onSignUpModal}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
