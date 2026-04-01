import { Suspense } from "react";
import "./App.css";
import Banner from "./components/homePage/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Players from "./components/players/Players";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayer();

  return (
    <>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Navbar></Navbar>;<Banner></Banner>
        <Players playerPromise={playerPromise}></Players>
      </Suspense>
    </>
  );
}

export default App;
