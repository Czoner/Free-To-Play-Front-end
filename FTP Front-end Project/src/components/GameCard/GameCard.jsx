import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  return (
    <li className="game">
      <img className="game__img" src={game.thumbnail} />
      <div className="game__info">
        <h2 className="game__name">{game.title}</h2>
        <p className="game__description">{game.short_description}</p>
        <div className="game__extra_info">
          <Link to={`/games/${game.id || game._id}`}>
            <button className="game__button_more">More</button>
          </Link>
          <p className="game__genre">{game.genre}</p>
        </div>
      </div>
    </li>
  );
};

export default GameCard;
