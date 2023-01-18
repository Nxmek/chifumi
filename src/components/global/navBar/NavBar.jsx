import React from "react";
import mc from "./nav-bar.module.scss";

const NavBar = () => {
  return (
    <div className={mc.container}>
      <div className={mc.playerScore}>
        <p>Ton score:</p>
      </div>
      <div className={mc.title}>
        <h2>Chi-Fu-Mi</h2>
      </div>
      <div className={mc.iaScore}>
        <p>Score ordi : </p>
      </div>
    </div>
  );
};

export default NavBar;
