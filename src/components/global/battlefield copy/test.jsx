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
  const [playerScore, setPlayerScore] = useState(0);
  const [iaScore, setIaScore] = useState(0);
  const [result, setResult] = useState("");

  const playerMakeChoice = (pc) => {
    setPlayerChoice(pc);
  };

  const iaMakeChoice = () => {
    const iaRandom = randomNumber(1, 3);
    switch (iaRandom) {
      case 1:
        setIaChoice("Rock");
        break;
      case 2:
        setIaChoice("Paper");
        break;
      case 3:
        setIaChoice("Scissors");
        break;
      default:
        break;
    }
  };

  const ViewPlayerChoice = () => {
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
  const ViewIaChoice = () => {
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

  const reset = () => {
    setIaChoice(null);
    setPlayerChoice(null);
    setResult("");
  };
  const fight = () => {
    if (iaChoice !== null) {
      if (iaChoice === playerChoice) {
        setResult("egalite");
      } else if (playerChoice === "Rock" && iaChoice === "Paper") {
        setResult("L'ordi gagne");
        addIS();
      } else if (playerChoice === "Rock" && iaChoice === "Scissors") {
        setResult("Tu gagnes");
        addPS();
      } else if (playerChoice === "Paper" && iaChoice === "Rock") {
        setResult("Tu gagnes");
        addPS();
      } else if (playerChoice === "Paper" && iaChoice === "Scissors") {
        setResult("L'ordi gagne");
        addIS();
      } else if (playerChoice === "Scissors" && iaChoice === "Rock") {
        setResult("L'ordi gagne");
        addIS();
      } else if (playerChoice === "Scissors" && iaChoice === "Paper") {
        setResult("Tu gagnes");
        addPS();
      }
    }
    setTimeout(() => {
      reset();
    }, 800);
  };
  const addPS = () => {
    setPlayerScore(playerScore + 1);
  };
  const addIS = () => {
    setIaScore(iaScore + 1);
  };

  useEffect(() => {
    console.log(Math.floor());
    console.log(`playerChoice :  ${playerChoice}`);
    if (playerChoice !== null) {
      iaMakeChoice();
    }
  }, [playerChoice]);

  useEffect(() => {
    console.log(`ia :  ${iaChoice}`);
    ViewIaChoice();
    fight();
  }, [iaChoice]);
  return (
    <div className={mc.container}>
      {!!result ? (
        <div className={mc.result}>
          <h3>{result}</h3>
        </div>
      ) : (
        <div className={mc.score}>
          <div>
            <h3>{`Ton score: ${playerScore}`}</h3>
          </div>
          <div>
            <h3>{`Score de l'ordi: ${iaScore}`}</h3>
          </div>
        </div>
      )}

      <div className={mc.fightingZone}>
        <div>
          <h2>Toi</h2>
          <div className={`adaptive-img-contain ${mc.signZone}`}>
            <span>
              <img src={ViewPlayerChoice()} alt="" />
            </span>
          </div>
        </div>
        <div>
          <h2>Ordi</h2>
          <div className={`adaptive-img-contain ${mc.signZone}`}>
            <span>
              <img src={ViewIaChoice()} alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className={mc.rules}>
        <h3>Fait ton choix </h3>
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
