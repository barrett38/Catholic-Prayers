import React from "react";
import "./App.css";

import SignOfTheCross from "./components/Prayers/SignOfTheCross";
import OurFather from "./components/Prayers/OurFather";
import HailMary from "./components/Prayers/HailMary";
import ActOfContrition from "./components/Prayers/ActOfContrition";
import ApostlesCreed from "./components/Prayers/ApostlesCreed";
import GloryBe from "./components/Prayers/GloryBe";
import SaintMichael from "./components/Prayers/SaintMichael";

function App() {
  return (
    <div className="App">
      <header className="App-header">Select a Prayer...</header>
      <p>The Sign of the Cross</p>
      <SignOfTheCross />
      <p>Act of Contrition</p>
      <ActOfContrition />
      <p>Apostles' Creed</p>
      <ApostlesCreed />
      <p>Our Father</p>
      <OurFather />
      <p>Hail Mary</p>
      <HailMary />
      <p>The Glory Be</p>
      <GloryBe />
      <p>Saint Michael</p>
      <SaintMichael />
      <p>O My Jesus</p>
    </div>
  );
}

export default App;
