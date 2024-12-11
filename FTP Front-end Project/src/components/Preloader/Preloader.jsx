import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloaderpage">
      <div className="circle-preloaderpage"></div>
      <p className="preloaderpage__text">Loading...</p>
    </div>
  );
};

export default Preloader;
