import React, { useEffect, useState } from "react";
import mc from "./battlefield.module.scss";
import Rock from "../../../img/rock.svg";
import Paper from "../../../img/paper.svg";
import Scissors from "../../../img/scissors.svg";

import rockIa from "../../../img/rock_ia.svg";
import { randomNumber } from "../../../utils/random";

const Battlefield = () => {
  const [iaChoice, setIaChoice] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  console.log(`initialisation : ${iaChoice}`);

  const choices = (playerChoice) => {
    setPlayerChoice(playerChoice);
    playerChoice ? iaMakeChoice() : console.log("erreur");

    console.log(`player :${playerChoice} vs ia: ${iaChoice} `);
    fightResult();
  };
  const iaMakeChoice = () => {
    const iaRandom = randomNumber(1, 3);
    if (iaRandom === 1) {
      setIaChoice("Rock");
    } else if (iaRandom === 2) {
      setIaChoice("Paper");
    } else if (iaRandom === 3) {
      setIaChoice("Scissors");
    }
  };
  const fightingZoneChoiceOfPlayer = () => {
    switch (playerChoice) {
      case "Rock":
        return Rock;
      case "Paper":
        return Paper;
      case "Scissors":
        return Scissors;
      default:
        break;
    }
  };
  const fightingZoneChoiceOfIa = () => {
    switch (iaChoice) {
      case "Rock":
        return Rock;
      case "Paper":
        return Paper;
      case "Scissors":
        return Scissors;
      default:
        break;
    }
  };

  const fightResult = () => {
    if (iaChoice === playerChoice) {
      console.log("égalité");
    }
  };
  // useEffect(iaMakeChoice, [playerChoice]);

  return (
    <div className={mc.container}>
      <div className={mc.fightingZone}>
        <div>
          <h2>Toi</h2>
          <div className={`adaptive-img-contain ${mc.signZone}`}>
            <span>
              <img src={fightingZoneChoiceOfPlayer()} alt="" />
            </span>
          </div>
        </div>
        <div>
          <h2>Ordi</h2>
          <div className={`adaptive-img-contain ${mc.signZone}`}>
            <span>
              <img src={fightingZoneChoiceOfIa()} alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className={mc.rules}>
        <p>Fait ton choix </p>
      </div>
      <div className={mc.choosingZone}>
        <div
          className={`adaptive-img-contain ${
            playerChoice === "Rock" ? mc.isChosen : mc.Rock
          }`}
          onClick={() => choices("Rock")}
        >
          <span>
            <img src={Rock} alt="" />
          </span>
        </div>
        <div
          className={`adaptive-img-contain ${
            playerChoice === "Paper" ? mc.isChosen : mc.Rock
          }`}
          onClick={() => {
            choices("Paper");
          }}
        >
          <span>
            <img src={Paper} alt="" />
          </span>
        </div>
        <div
          className={`adaptive-img-contain ${
            playerChoice === "Scissors" ? mc.isChosen : mc.Rock
          }`}
          onClick={() => {
            choices("Scissors");
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

export default Battlefield;
