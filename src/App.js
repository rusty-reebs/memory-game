// App.js

import React, { useState } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <Container>
      <Navbar currentScore={currentScore} highScore={highScore} />
      <Jumbotron />
    </Container>
  );
};

export default App;
