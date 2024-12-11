import React from "react";
import { useState } from "react";
import "./Main.css";
import GameCard from "../GameCard/GameCard";

const Main = ({ games }) => {
  return (
    <main>
      <h1 className="title">All Games</h1>
      <section className="games__section">
        <ul className="games__list">
          {games.map((x) => {
            return <GameCard key={x.id || x._id} game={x} />;
          })}
        </ul>
      </section>
    </main>
  );
};

export default Main;
