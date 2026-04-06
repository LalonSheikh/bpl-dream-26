import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/homePage/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Players from "./components/players/Players";
import { ToastContainer } from "react-toastify";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayer();
  const [coin, setCoin] = useState(500000);
  // console.log(typeof coin, typeof setCoin);
  return (
    <>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Navbar coin={coin}></Navbar>;<Banner></Banner>
        <Players
          playerPromise={playerPromise}
          coin={coin}
          setCoin={setCoin}
        ></Players>
      </Suspense>
      {/* react toastify */}
      <ToastContainer />
    </>
  );
}

export default App;
