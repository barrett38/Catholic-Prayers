import React, { useState } from "react";
import { useFadingEntry0 } from "../fadingEntry.js";
import Footer from "../Footer/Footer.jsx";
import "./prayers.css";
import prayers from "../ListOfPrayers.js";

const signOfTheCross1 = `Finally, we end with the Sign of the Cross: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen."`;
const introText =
  "THE SERVITE ROSARY IS A DEVOTION TO THE SUFFERINGS OF CHRIST THROUGH THE HOLY MOTHER. THE ROSARY IS THE ONLY PRAYER YOU NEED...";
const signOfTheCross = `Start with the Sign of the Cross: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen."`;

export default function ServiteRosaryOffering() {
  const [showContent, setShowContent] = useState(false);
  useFadingEntry0(setShowContent);

  return (
    <div>
      <div className="App">
        <h2 className="introText">{introText}</h2>
        <div className={`content ${showContent ? "visible" : ""}`}>
          <p>{signOfTheCross}</p>
          <h2 className="custom-margin-top">OFFER THIS ROSARY TO GOD:</h2>
          <p>{prayers.serviteRosaryOffering}</p>
          <h2>-- PRAY 1 OUR FATHER</h2>
          <h2>-- PRAY 3 HAIL MARY'S</h2>
          <h2>-- PRAY 1 MOST MERCIFUL MOTHER</h2>
          <h2 className="custom-margin-top">
            THE SERVITE DECADE IS AS FOLLOWS:
          </h2>
          <h2>-- DECLARE THE NEXT SORROW</h2>
          <h2>-- PRAY 1 OUR FATHER</h2>
          <h2>-- PRAY 7 HAIL MARY'S</h2>
          <h2>-- PRAY 1 MOST MERCIFUL MOTHER</h2>
          <h2>-- PRAY 1 DECADES FOR EVERY SORROW</h2>
          <>
            <h2 className="custom-margin-top">THE SEVEN SORROWS OF MARY:</h2>
            <p>The First Sword of Sorrow: The Prophecy of Simeon</p>
            <p>The Second Sword of Sorrow: The Flight Into Egypt</p>
            <p>The Third Sword of Sorrow: The Loss of Jesus in the Temple</p>
            <p>
              The Fourth Sword of Sorrow: Mary Meets Jesus on His Way to Calvary
            </p>
            <p>
              The Fifth Sword of Sorrow: Mary Stands at the Foot of the Cross
            </p>
            <p>The Sixth Sword of Sorrow: Jesus is Taken Down From the Cross</p>
            <p>The Seventh Sword of Sorrow: The Burial of Jesus</p>
            <h2 className="custom-margin-top">THE CLOSING PRAYERS:</h2>
            <p>
              PRAY ONCE: Queen of Martyrs, your heart suffered so much. I beg
              you, by the merits of the tears you shed in these terrible and
              sorrowful times, to obtain for me and all the sinners of the world
              the grace of complete sincerity and repentance. Amen.
            </p>
            <p>
              PRAY THRICE: Mary, who was conceived without sin and who suffered
              for us, pray for us.
            </p>
          </>
          <p className="custom-margin-bottom">{signOfTheCross1}</p>
          <Footer />
        </div>
      </div>
    </div>
  );
}
