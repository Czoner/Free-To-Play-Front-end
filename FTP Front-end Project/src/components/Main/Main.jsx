import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <h1 className="title">All Games</h1>
      <div className="cards">
        <img
          className="card__img"
          src="https://images.unsplash.com/photo-1682687221175-fd40bbafe6ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        <div className="card__info">
          <h2 className="card__name">Words asdadvfahewrbvahdvouabewh</h2>
          <p className="card__description">
            Ever since I read Richard asdfaisfd asdf asdf
            ddsadfasedfasdfasdawsdif hdsvcasdfyaoiuds ashdf asdhascdasdvuocsx
            asdhvc asd weafhasdofiaybwedf aewyfasdhf asdfoauwe ashdvcoauwse
            dfasdf aweusfasdufyawsef asdf awsd fa ewisfefeiuwedieuwf efuysd
            fdsfbewuifjifgjbndb gjtgoifduggrndoirg n
          </p>
          <button>More</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
