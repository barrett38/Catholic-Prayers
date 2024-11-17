import React, { useEffect, useState } from "react";
import "./App.css";

import OurFather from "./components/Prayers/OurFather";
import HailMary from "./components/Prayers/HailMary";
// import ActOfContrition from "./components/Prayers/ActOfContrition";
import ApostlesCreed from "./components/Prayers/ApostlesCreed";
import GloryBe from "./components/Prayers/GloryBe";
import SaintMichael from "./components/Prayers/SaintMichael";
import OMyJesus from "./components/Prayers/OMyJesus";

const introText = "THE ONLY PRAYER YOU NEED IS THE ROSARY...";
const signOfTheCross = `Start with the Sign of the Cross: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen."`;

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // fadeIn Time for introText

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <h2 className="introText">{introText}</h2>
      <div className={`content ${showContent ? "visible" : ""}`}>
        <p>{signOfTheCross}</p>
        <h>Pray the Apostles' Creed once:</h>
        <ApostlesCreed />
        <OurFather />
        <HailMary />
        <GloryBe />
        <SaintMichael />
        <OMyJesus />
      </div>
    </div>
  );
}

export default App;
