import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import SelectedCard from "../../ui/SelectedCard";

const SelectedPlayers = ({
  selectedPlayers,
  coin,
  setCoin,
  setSelectedPlayers,
}) => {
  // console.log("selected Players", selectedPlayers);

  const handleDeleteSelectedPlayers = (player) => {
    console.log((player, "Player"));
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName !== player.playerName,
    );
    console.log(("selectedPlayer", filteredPlayers));
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.price);
  };

  return (
    <div>
      <div className="space-y-5">
        {selectedPlayers.length === 0 ? (
          <div className="flex items-center  justify-center gap-4 flex-col h-[400px] ">
            <h2 className="font-semibold text-xl">No Player Selected Yet</h2>
            <p>Go to Available to select a Player</p>
          </div>
        ) : (
          selectedPlayers.map((player, index) => {
            return (
              <SelectedCard
                player={player}
                handleDeleteSelectedPlayers={handleDeleteSelectedPlayers}
                key={index}
              ></SelectedCard>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SelectedPlayers;
