import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedCard = ({ player, handleDeleteSelectedPlayers }) => {
  return (
    <div>
      <div className="flex justify-between items-center rounded-3xl p-10 border gap-5">
        <div className="flex items-center gap-4">
          <img
            src={player.image}
            alt={player.image}
            className="h-[100px] w-auto rounded-xl"
          />
          <div>
            <h2 className="flex items-center font-semibold gap-2 text-2xl">
              <FaUser></FaUser> {player.playerName}
            </h2>
            <p>{player.playerType}</p>
          </div>
        </div>
        <button
          onClick={() => handleDeleteSelectedPlayers(player)}
          className="btn  text-red-500"
        >
          <MdDelete className="w-[40px] h-auto" />
        </button>
      </div>
    </div>
  );
};

export default SelectedCard;
