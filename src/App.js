import React, { useEffect, useState } from "react";
import "./App.css";

import ServiteRosaryOffering from "./components/Prayers/ServiteRosaryOffering";

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

        {/* The beginning */}
        <h2 className="custom-margin-top">OFFER THIS ROSARY TO GOD:</h2>
        <ServiteRosaryOffering />
        <h2>-- PRAY 3 HAIL MARY'S</h2>
        <h2>-- PRAY 1 MOST MERCIFUL MOTHER</h2>

        {/* Servite Decade */}
        <h2 className="custom-margin-top">A SERVITE DECADE IS AS FOLLOWS:</h2>
        <h2>-- DECLARE THE NEXT SORROW</h2>
        <h2>-- PRAY 1 OUR FATHER</h2>
        <h2>-- PRAY 7 HAIL MARY'S</h2>
        <h2>-- PRAY 1 MOST MERCIFUL MOTHER</h2>
        <h2>-- PRAY ANOTHER DECADE IF NEEDED</h2>

        {/* the Seven Sorrows */}
        <h2 className="custom-margin-top">THE SEVEN SORROWS OF MARY:</h2>
        <p>The First Sword of Sorrow: The Prophecy of Simeon</p>
        <p>The Second Sword of Sorrow: The Flight Into Egypt</p>
        <p>The Third Sword of Sorrow: The Loss of Jesus in the Temple</p>
        <p>
          The Fourth Sword of Sorrow: Mary Meets Jesus on His Way to Calvary
        </p>

        <p className="custom-margin-bottom">{signOfTheCross1}</p>
      </div>
    </div>
  );
}

export default App;
