import React from "react";
import "./Main.css";
import GameCard from "../GameCard/GameCard";

const Main = () => {
  return (
    <main>
      <h1 className="title">All Games</h1>
      <section className="games__section">
        <GameCard />
      </section>
    </main>
  );
};

export default Main;
