import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Card = ({
  coin,
  player,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  // console.log(Number(coin) - Number(player.price));
  const handleChoosePlayer = () => {
    let newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(coin - player.price);
    } else {
      toast.error("Not enough coin to purchase this player.");
      return;
    }
    // alert(`${player.playerName} is selected`);
    toast.success(`${player.playerName} is selected`);
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers, player]);
  };

  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img src={player.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser /> {player.playerName}
        </h2>
        <div className="flex justify-between gap-2 items-center">
          <div className="flex justify-between gap-2 items-center">
            <FaFlag />
            <p>Bangladesh</p>
          </div>
          <button className="btn btn-ghost">{player.playerType} </button>
        </div>
        <div className="divider"></div>
        <h2 className="font-bold">{player.rating}</h2>
        <div className="flex justify-between gap-4">
          <p>{player.battingStyle} </p>
          <p className="text-right"> {player.bowlingStyle} </p>
        </div>

        <div className="card-actions justify-between items-center">
          <p className="font-semibold">Price: ${player.price}</p>
          <button
            className="btn "
            onClick={handleChoosePlayer}
            disabled={isSelected ? true : false}
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
