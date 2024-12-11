import React from "react";
import { Link } from "react-router-dom";
import FTGLogo from "../../assets/FreetoGameLogo.jpg";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = ({
  isLoggedIn,
  onSignInModal,
  onSignUpModal,
  onSearchBar,
  handleLogOut,
  username,
}) => {
  function firstLetterCapitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const userNameResult = firstLetterCapitalize(username);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={FTGLogo} alt="Logo" className="header__image" />
        </Link>
        <SearchForm searchBar={onSearchBar} />
      </div>
      <div className="header__description">
        {isLoggedIn ? (
          <>
            <div className="header__username">{userNameResult}</div>

            <button onClick={handleLogOut} className="header__signOut">
              Sign Out
            </button>
          </>
        ) : (
          <>
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
