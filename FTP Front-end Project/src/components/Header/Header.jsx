import React from "react";
import ReactLogo from "../../assets/react.svg";
import "./Header.css";

const Header = ({ isLoggedIn, onSignInModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={ReactLogo} alt="Logo" />
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
            <button type="text" className="header__signup">
              Sign Up
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
