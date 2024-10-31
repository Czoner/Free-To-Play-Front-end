import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import GamePage from "../GamePage/GamePage";
import { getGames } from "../../utils/FreetoGameApi";
import CurrentGameContext from "../contexts/CurrentGameContext";
import Footer from "../Footer/Footer";
import SignInModal from "../ModalWithForm/SignInModal";
import SignUpModal from "../ModalWithForm/SignUpModal";
import NothingFound from "../NothingFound/NothingFound";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [games, setGames] = useState([]);

  const handleSignUpModal = () => {
    setActiveModal("signUp");
  };

  const handleSingInModal = () => {
    setActiveModal("signIn");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      e.preventDefault();
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  useEffect(() => {
    getGames()
      .then((data) => {
        setError(<NothingFound />);
      })
      .catch((err) => {
        console.error(err);
        console.log("errror on this preloader");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading && games === 0) {
    return <NothingFound />;
  }

  if (error) {
    return <NothingFound />;
  }

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onSignInModal={handleSingInModal}
        onSignUpModal={handleSignUpModal}
      />
      <Routes>
        <Route exact path="/" element={<Main games={games} />} />
        <Route exact path="/games/:id" element={<GamePage />} />
      </Routes>
      <Footer />

      <SignInModal
        isOpen={activeModal === "signIn"}
        handleCloseModal={handleCloseModal}
      />

      <SignUpModal
        isOpen={activeModal === "signUp"}
        handleCloseModal={handleCloseModal}
      />

      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
