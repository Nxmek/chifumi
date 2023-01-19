import React, { useEffect, useState } from "react";
import mc from "./battlefield.module.scss";
import Rock from "../../../img/rock.svg";
import Paper from "../../../img/paper.svg";
import Scissors from "../../../img/scissors.svg";

import rockIa from "../../../img/rock_ia.svg";
import { randomNumber } from "../../../utils/random";

const Battlefield2 = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [iaChoice, setIaChoice] = useState(null);

  const playerMakeChoice = (playerChoice) => {
    setPlayerChoice(playerChoice);
  };
  const iaMakeChoice = () => {
    const IaRandom = randomNumber(1, 3);
    console.log(IaRandom);
  };

  iaMakeChoice();

  return (
    <div className={mc.container}>
      <div className={mc.fightingZone}>
        <div>
          <h2>Toi</h2>
          <div className={`adaptive-img-contain ${mc.signZone}`}>
            <span>
              <img src={Rock} alt="" />
            </span>
          </div>
        </div>
        <div>
          <h2>Ordi</h2>
          <div className={`adaptive-img-contain ${mc.signZone}`}>
            <span>
              <img src={rockIa} alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className={mc.rules}>
        <p>Fait ton choix </p>
      </div>
      <div className={mc.choosingZone}>
        <div
          className={`adaptive-img-contain ${mc.Rock}`}
          onClick={() => {
            playerMakeChoice("Rock");
          }}
        >
          <span>
            <img src={Rock} alt="" />
          </span>
        </div>
        <div
          className={`adaptive-img-contain ${mc.Rock}`}
          onClick={() => {
            playerMakeChoice("Paper");
          }}
        >
          <span>
            <img src={Paper} alt="" />
          </span>
        </div>
        <div
          className={`adaptive-img-contain ${mc.Rock}`}
          onClick={() => {
            playerMakeChoice("Scissors");
          }}
        >
          <span>
            <img src={Scissors} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Battlefield2;
