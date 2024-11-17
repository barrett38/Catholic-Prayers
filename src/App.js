import React, { useEffect, useState } from "react";
import "./App.css";

import ServiteRosaryOffering from "./components/Prayers/ServiteRosaryOffering";
import ServiteDecade from "./components/Prayers/ServiteDecade";
import TheSevenSorrows from "./components/Prayers/TheSorrows";

const introText = "THE ONLY PRAYER YOU NEED IS THE SERVITE ROSARY...";
const signOfTheCross = `Start with the Sign of the Cross: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen."`;
const signOfTheCross1 = `Finally, we end with the Sign of the Cross: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen."`;

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
        <h2 className="custom-margin-top">OFFER THIS ROSARY TO GOD:</h2>
        <ServiteRosaryOffering />
        <ServiteDecade />
        <TheSevenSorrows />
        <p className="custom-margin-bottom">{signOfTheCross1}</p>
      </div>
    </div>
  );
}

export default App;
