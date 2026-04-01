import React from "react";
import Card from "../../ui/Card";
const AvailablePlayers = ({ players }) => {
  console.log("players :", players);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {players.map((player) => {
        return <Card player={player}></Card>;
      })}
    </div>
  );
};

export default AvailablePlayers;
