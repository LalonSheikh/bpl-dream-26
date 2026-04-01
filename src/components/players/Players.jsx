import React, { use } from "react";
import AvailablePlayers from "../homePage/availablePlayers/AvailablePlayers";

const Players = ({ playerPromise }) => {
  console.log(playerPromise);
  const players = use(playerPromise);
  console.log(players);
  return (
    <div className="container mx-auto">
      Players: {players.length}
      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
};

export default Players;
