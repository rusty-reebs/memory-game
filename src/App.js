// App.js

import React, { useState } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CharacterCard from "./components/CharacterCard";
import characters from "./components/characters.json";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [chars, setChars] = useState(characters);
  const [clicked, setClicked] = useState(false);

  const handleClick = (id) => {
    shuffleArray();
    handleScore(id);
  };

  const handleScore = (id) => {
    chars.forEach((char) => {
      if (id === char.id && char.clicked === false) {
        char.clicked = true;
        setClicked(false);
        handleIncrement();
      } else if (id === char.id && char.clicked === true) {
        if (currentScore > highScore) {
          setHighScore(currentScore);
        }
        setCurrentScore(0);
        setClicked(true);
        chars.forEach((char) => {
          char.clicked = false;
        });
      }
    });
  };

  const shuffleArray = () => {
    const shuffledArray = shuffle(chars);
    setChars(shuffledArray);
  };

  const handleIncrement = () => {
    setCurrentScore(currentScore + 1);
  };

  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  return (
    <Container>
      <Navbar currentScore={currentScore} highScore={highScore} />
      <Jumbotron />
      {chars.map((character) => (
        <CharacterCard
          Clicked={clicked}
          handleClick={handleClick}
          id={character.id}
          key={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
    </Container>
  );
};

export default App;
