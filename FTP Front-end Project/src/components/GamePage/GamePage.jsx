import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { detailsOfGame, genreOfGame } from "../../utils/FreetoGameApi";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";
import "./GamePage.css";

const GamePage = () => {
  const { id } = useParams();
  const [selectedGame, setSelectedGame] = useState({});
  const [relatedGames, setRelatedGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const randomizeList = (list) => {
    return list.sort(() => Math.random() - 0.5).slice(0, 3);
  };

  useEffect(() => {
    detailsOfGame(id)
      .then((data) => {
        if (data) {
          setSelectedGame(data);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (selectedGame && selectedGame.genre) {
      genreOfGame(selectedGame.genre)
        .then((filterdGames) => {
          if (Array.isArray(filterdGames)) {
            const randomizedGames = randomizeList(filterdGames);
            setRelatedGames(randomizedGames);
          } else {
            setRelatedGames([]);
          }
        })
        .catch((error) => {
          console.error(error);
          setRelatedGames([]);
        });
    }
  }, [selectedGame]);

  if (isLoading) {
    return <Preloader />;
  }

  if (error || !selectedGame) {
    return <NothingFound />;
  }
  return (
    <div className="gamepage">
      <section className="gamepage__leftside">
        <h1 className="gamepage__title">{selectedGame.title}</h1>
        <img
          src={selectedGame.thumbnail}
          className="gamepage__image"
          alt="Game Image"
        />
        <p className="gamepage__developer">
          Developer: {selectedGame.developer}
        </p>
        <p className="gamepage__publication">
          Publication: {selectedGame.publisher}
        </p>
      </section>

      <section className="gamepage__rightside">
        <div className="gamepage__infolayout">
          <h2 className="gamepage__titlelayout">About {selectedGame.title}</h2>
          <button
            className="gamepage__website"
            onClick={() => (window.location.href = selectedGame.game_url)}
          >
            Visit the website
          </button>
          <p className="gamepage__titleshortDes">
            Short description of the game:
          </p>
          <p className="gamepage__shortdescription">
            {selectedGame.short_description}
          </p>
          <p className="gamepage__titleDes">
            The full description of the game:
          </p>
          <p className="gamepage__description">{selectedGame.description}</p>
        </div>
        <div className="gamepage__relavencegames">
          <h3 className="gamepage__similargames">
            Games that are similar to {selectedGame.title}
          </h3>
          <ul className="gamepage__randomgames">
            {relatedGames.map((game) => (
              <li key={game.id} className="randomgame">
                <Link to={`/games/${game.id || game._id}`}>
                  <img
                    className="randomgame__image"
                    src={game.thumbnail}
                    alt="Game Thumbnail"
                  />
                </Link>
                <Link to={`/games/${game.id || game._id}`}>{game.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GamePage;
