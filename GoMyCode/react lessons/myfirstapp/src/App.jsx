import React from "react";
import players from "./players.js";
import Player from "./components/Player";
import Header from "./components/Header";
const App = () => {
  return (
    <div>
      <Header data={players} />
      {players.map((player) => (
        <Player key={player.id} {...player} />
      ))}     
    </div> 
  ); 
};

export default App;
