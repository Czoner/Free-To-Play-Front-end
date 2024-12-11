import React from "react";
import "./NothingFound.css";
import Dizzy from "../../assets/DizzyWhite.svg";

const NothingFound = () => {
  return (
    <div className="nothingpage">
      <h1 className="nothingpage__title">Nothing to be found</h1>
      <p className="nothingpage__bodytext">
        Sorry, something went wrong during the request. There may be a
        connection issue or the server may be down. Please try again later.
      </p>
      <img
        className="nothingpage__image"
        src={Dizzy}
        alt="Nothing page image"
      ></img>
    </div>
  );
};

export default NothingFound;
