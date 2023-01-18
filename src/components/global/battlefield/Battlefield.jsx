import React, { useState } from "react";
import mc from "./battlefield.module.scss";
import rock from "../../../img/rock.svg";
import paper from "../../../img/paper.svg";
import scissors from "../../../img/scissors.svg";

import rockIa from "../../../img/rock_ia.svg";
import { randomNumber } from "../../../utils/random";

const Battlefield = () => {
  const [iaChoice, setIaChoice] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  const iaMakeChoice = () => {
    const iaRandom = randomNumber(1, 3);
    switch (iaRandom) {
      case 1:
        setIaChoice("Rock");
        break;
      case 2:
        setIaChoice("Paper");
        break;
      case 1:
        setIaChoice("Scissors");
        break;
      default:
        break;
    }
  };
  if (playerChoice) {
    iaMakeChoice();
    console.log(`ia fait :${iaChoice}`);
  }

  console.log(`player fait :${playerChoice}`);

  return (
    <div className={mc.container}>
      <div className={mc.fightingZone}>
        <div className={`adaptive-img-contain ${mc.playerZone}`}>
          <span>
            <img src={rock} alt="" />
          </span>
        </div>
        <div className={`adaptive-img-contain ${mc.iaZone}`}>
          <span>
            <img src={rockIa} alt="" />
          </span>
        </div>
      </div>
      <div className={mc.rules}>
        <p>Fait ton choix </p>
      </div>
      <div className={mc.choosingZone}>
        <div
          className={`adaptive-img-contain ${mc.rock}`}
          onClick={() => setPlayerChoice("Rock")}
        >
          <span>
            <img src={rock} alt="" />
          </span>
        </div>
        <div
          className={`adaptive-img-contain ${mc.paper}`}
          onClick={() => {
            setPlayerChoice("Paper");
          }}
        >
          <span>
            <img src={paper} alt="" />
          </span>
        </div>
        <div
          className={`adaptive-img-contain ${mc.scissors}`}
          onClick={() => {
            setPlayerChoice("Scissors");
          }}
        >
          <span>
            <img src={scissors} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Battlefield;
