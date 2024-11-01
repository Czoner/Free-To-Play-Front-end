import React from "react";
import "./NothingFound.css";
import Dizzy from "../../assets/DizzyWhite.svg";

const NothingFound = () => {
  return (
    <div className="nothingpage">
      <h1 className="nothingpage__title">Nothing to be found</h1>
      <p className="nothingpage__bodytext">
        Sorry, we could not find the game you are looking for. Please try again
        later
      </p>
      <img className="nothingpage__image" src={Dizzy}></img>
    </div>
  );
};

export default NothingFound;
