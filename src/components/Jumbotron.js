// Jumbotron.js

import React from "react";

const Jumbotron = (props) => {
  return (
    <div className="jumbotron">
      <div className="cardscontainer">
        {props.children}
        <p>Click on an image, but don't click the same image more than once!</p>
      </div>
    </div>
  );
};

export default Jumbotron;
