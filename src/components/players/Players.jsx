import React, { use, useState } from "react";
import AvailablePlayers from "./availablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectecPlayers/SelectedPlayers";

const Players = ({ playerPromise, coin, setCoin }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  // console.log(playerPromise);
  const players = use(playerPromise);
  const [selectedType, setSelectedType] = useState("Available");
  // console.log(players, selectedType);
  return (
    <div className="container mx-auto my-[60px]">
      <div className="flex justify-between items-center gap-4 mb-[20px]">
        {selectedType === "Available" ? (
          <h2 className="font-bold text-3xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-3xl">
            Selected Players({selectedPlayers.length}/{players.length})
          </h2>
        )}
        <div>
          <button
            onClick={() => setSelectedType("Available")}
            className={`btn  ${selectedType === "Available" ? "bg-[#e7fe29]" : ""} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("Selected")}
            className={`btn ${selectedType === "Selected" ? "bg-[#e7fe29]" : ""}  rounded-l-none rounded-r-xl`}
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>
      {selectedType === "Available" ? (
        <AvailablePlayers
          setCoin={setCoin}
          players={players}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
