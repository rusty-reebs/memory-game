// Navbar.js

import React from "react";

const Navbar = (props) => {
  return (
    <header>
      <div>
        <h1>Memory Game</h1>
        <nav>
          <p>
            Score: <span>{props.currentScore}</span>
          </p>
          <p>
            High Score: <span>{props.highScore}</span>
          </p>
          {props.children}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
