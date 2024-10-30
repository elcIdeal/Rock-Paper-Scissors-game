import React, { useState } from "react";
import "./App.css";
import Rock from "../src/images/Rock.png";
import Paper from "../src/images/Paper.png";
import Scissors from "../src/images/Scissors.png";

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const choice = [Rock, Paper, Scissors];

  const playgame = (userSelection) => {
    setUserChoice(userSelection);

    const random = Math.floor(Math.random() * 3);
    const compChoice = choice[random];
    setComputerChoice(compChoice);

    if (userSelection === compChoice) {
      setResult("Ничья!");
    } else if (
      (userSelection === Rock && compChoice === Scissors) ||
      (userSelection === Scissors && compChoice === Paper) ||
      (userSelection === Paper && compChoice === Rock)
    ) {
      setResult("Вы выиграли!");
    } else {
      setResult("Компьютер выиграл!");
    }
  };

  return (
    
      <div className="center">
        <h1>Choose one</h1>
        <div className="Btn">
          <button className="btn" onClick={() => playgame(Rock)}>
            <img src={Rock} alt="Rock" />
          </button>
          <button className="btn" onClick={() => playgame(Paper)}>
            <img src={Paper} alt="Paper" />
          </button>
          <button className="btn" onClick={() => playgame(Scissors)}>
            <img src={Scissors} alt="Scissors" />
          </button>
      
      </div>
      <div className="result">
        <h2>Ваш выбор: {userChoice && <img src={userChoice} alt="User Choice" />}</h2>
        <h2>Выбор компьютера: {computerChoice && <img src={computerChoice} alt="Computer Choice" />}</h2>
        <h2>Результат: {result}</h2>
      </div>
   </div>
  );
};

export default App;
