import React, { useState } from "react";
import { useFadingEntry0 } from "../fadingEntry.js";
import Footer from "../Footer/Footer.jsx";
import "./prayers.css";
import { otherTexts } from "../ListOfPrayers.js";

import {
  BeginningOfServite,
  ServiteDecade,
  ClosingOfServite,
} from "./PartsOfServite.jsx";

export default function ServiteRosaryOffering() {
  const [showContent, setShowContent] = useState(false);
  useFadingEntry0(setShowContent);

  return (
    <div>
      <div className="App">
        <h2 className="introText">{otherTexts.introText}</h2>
        <div className={`content ${showContent ? "visible" : ""}`}>
          <BeginningOfServite />
          <ServiteDecade />
          <ClosingOfServite />
          <Footer />
        </div>
      </div>
    </div>
  );
}
