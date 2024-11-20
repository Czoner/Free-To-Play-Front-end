import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import GamePage from "../GamePage/GamePage";
import { getGames } from "../../utils/FreetoGameApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { setToken, getToken, removeToken } from "../../utils/token";
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
    const jwt = getToken();

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

    auth
      .getUser(jwt)
      .then((data) => {
        setIsLoggedIn(true);
        setUserData(data);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
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

  const handleSignIn = ({ username, password }) => {
    if (!username || !password) {
      return;
    }

    return auth
      .signIn({ username, password })
      .then((res) => {
        if (res.token) {
          auth
            .getUser(res.token)
            .then((data) => {
              setIsLoggedIn(true);
              setUserData(data);
              navigate("/");
            })
            .catch((err) => {
              console.error(err);
            });
          setToken(res.token);
          handleCloseModal();
        }
      })
      .catch((err) => {
        console.error(err);
        console.log("this is wrong ");
      });
  };

  //Handles the submit buttons
  function handleSubmit(request) {
    setIsLoading(true);
    request()
      .then(handleCloseModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  const handleLogOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    removeToken();
    navigate("/");
  };

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
        handleLogOut={handleLogOut}
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
        handleSignIn={handleSignIn}
      />

      <SignUpModal
        isOpen={activeModal === "signUp"}
        handleCloseModal={handleCloseModal}
        handleSignInModal={handleSignInModal}
        handleSignUp={handleSignUp}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
