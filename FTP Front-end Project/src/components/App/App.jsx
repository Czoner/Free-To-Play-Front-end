import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

import { getGames } from "../../utils/Api";
import Footer from "../Footer/Footer";
import SignInModal from "../ModalWithForm/SignInModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [games, setGames] = useState([]);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

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
    getGames().then((data) => {
      setGames(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onSignInModal={handleSingInModal} />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/games" />
      </Routes>
      <Footer />

      {activeModal === "signIn" && (
        <SignInModal
          isOpen={activeModal === "signIn"}
          handleCloseModal={handleCloseModal}
        />
      )}

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
