// CharacterCard.js

import React from "react";

const CharacterCard = (props) => {
  return (
    <div
      className={"card " + (props.Clicked ? "animate" : "")}
      onClick={() => props.handleClick(props.id)}
    >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="img-content">
        <strong>{props.name}</strong>
      </div>
    </div>
  );
};

export default CharacterCard;
