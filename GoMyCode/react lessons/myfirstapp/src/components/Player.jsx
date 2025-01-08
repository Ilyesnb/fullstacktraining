import React from "react";
const Player = (props) => {
  return (
    <div>
      <div className="player">
        <span className="player-name">
          <button className="remove-player">✖</button>{props.name}
        </span>
        <div className="counter">
          <button className="counter-action decrement"> - </button>
          <span className="counter-score">20</span>
          <button className="counter-action increment"> + </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
