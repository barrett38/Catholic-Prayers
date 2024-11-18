import React, { useState } from "react";
import Footer from "../Footer/Footer.jsx";
import prayers from "../ListOfPrayers.js";
import { useFadingEntry0 } from "../fadingEntry.js";

export default function IndividualPrayers() {
  const [showContent, setShowContent] = useState(false);
  useFadingEntry0(setShowContent);

  return (
    <div>
      <div className="App">
        <div className={`content ${showContent ? "visible" : ""}`}>
          <h2>THE SIGN OF THE CROSS</h2>
          <p>{prayers.signOfTheCross}</p>
          <h2>THE APOSTLES CREED</h2>
          <p>{prayers.apostlesCreed}</p>
          <h2>OUR FATHER</h2>
          <p>{prayers.ourFather}</p>
          <h2>HAIL MARY</h2>
          <p>{prayers.hailMary}</p>
          <h2>GLORY BE</h2>
          <p>{prayers.gloryBe}</p>
          <h2>O MY JESUS</h2>
          <p>{prayers.oMyJesus}</p>
          <h2>ACT OF CONTRITION</h2>
          <p>{prayers.actOfContrition}</p>
          <h2>MOST MERCIFUL MOTHER</h2>
          <p>{prayers.mostMercifulMother}</p>
          <h2>SAINT MICHAEL</h2>
          <p className="custom-margin-bottom">{prayers.saintMichael}</p>
          <Footer />
        </div>
      </div>
    </div>
  );
}
