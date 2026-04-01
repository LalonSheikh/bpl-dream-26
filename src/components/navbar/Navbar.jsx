import React from "react";
import dollarPic from "../../assets/dollar 1.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="btn gap-2 text-xl flex justify-center items-center">
          0 Coins
          <img src={dollarPic} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
