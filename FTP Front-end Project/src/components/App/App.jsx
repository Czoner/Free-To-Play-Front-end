import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import GamePage from "../GamePage/GamePage";
import { getGames } from "../../utils/FreetoGameApi";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import * as auth from "../../utils/Auth";
import Footer from "../Footer/Footer";
import SignInModal from "../ModalWithForm/SignInModal";
import SignUpModal from "../ModalWithForm/SignUpModal";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [games, setGames] = useState([]);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [filteredGames, setFilteredGames] = useState([]);
  const navigate = useNavigate();

  const handleSignUpModal = () => {
    setActiveModal("signUp");
  };

  const handleSignInModal = () => {
    setActiveModal("signIn");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
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
        if (data) {
          setGames(data);
          setFilteredGames(data);
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
  }, []);

  //handles the Search Bar

  const handleSearch = (searchedGame) => {
    const searchedLowerCaseGame = searchedGame.toLowerCase();
    const results = games.filter((game) => {
      return game.title.toLowerCase().includes(searchedLowerCaseGame);
    });
    setFilteredGames(results);
  };

  //Handles the Sign UP

  const handleSignUp = ({ username, email, password }) => {
    function makeRequest() {
      return auth.signUp({ username, email, password }).then(() => {
        setIsLoggedIn(true);
        setUserData({ username, email, password });
        navigate("/");
      });
    }
    handleSubmit(makeRequest);
  };

  //Handles the Sign IN

  //Handles the submit buttons
  function handleSubmit(request) {
    setIsLoading(true);
    request()
      .then(handleCloseModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return <NothingFound />;
  }

  return (
    <CurrentUserContext.Provider value={userData}>
      <Header
        isLoggedIn={isLoggedIn}
        onSignInModal={handleSignInModal}
        onSignUpModal={handleSignUpModal}
        onSearchBar={handleSearch}
        username={userData.username}
      />
      <Routes>
        <Route exact path="/" element={<Main games={filteredGames} />} />
        <Route exact path="/games/:id" element={<GamePage />} />
      </Routes>
      <Footer />

      <SignInModal
        isOpen={activeModal === "signIn"}
        handleCloseModal={handleCloseModal}
        handleSignUpModal={handleSignUpModal}
      />

      <SignUpModal
        isOpen={activeModal === "signUp"}
        handleCloseModal={handleCloseModal}
        handleSignInModal={handleSignInModal}
        handleSignUp={handleSignUp}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
