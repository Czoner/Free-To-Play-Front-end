import React from "react";
import { Link } from "react-router-dom";
import ReactLogo from "../../assets/react.svg";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = ({ isLoggedIn, onSignInModal, onSignUpModal, onSearchBar }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={ReactLogo} alt="Logo" />
        </Link>
        <SearchForm searchBar={onSearchBar} />
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
