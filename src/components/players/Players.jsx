import React, { use } from "react";
import AvailablePlayers from "../homePage/availablePlayers/AvailablePlayers";

const Players = ({ playerPromise }) => {
  console.log(playerPromise);
  const players = use(playerPromise);
  console.log(players);
  return (
    <div className="container mx-auto my-[60px]">
      <div className="flex justify-between items-center gap-4 mb-[20px]">
        <h2 className="font-bold text-3xl">Available Players</h2>
        <div>
          <button className="btn bg-[#e7fe29] rounded-r-none rounded-l-xl">Available</button>
          <button className="btn btn-neutral rounded-l-none rounded-r-xl">Selected</button>
        </div>
      </div>
      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
};

export default Players;
