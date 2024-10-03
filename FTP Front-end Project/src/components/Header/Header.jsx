import React from "react";
import ReactLogo from "../../assets/react.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={ReactLogo} alt="Logo" />
        <p>ajhivbaewivasdvijaedvuiauiwevubahvhjfvuiaueyiuiakefnudiauivaju</p>
      </div>
      <div className="header__description">
        <button type="text" className="header__games">
          My Games
        </button>
        <button type="text" className="header__stufff">
          ahbaiuewjhad
        </button>
        <button type="text" className="header__signin">
          Sign In
        </button>
        <button type="text" className="header__signup">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
