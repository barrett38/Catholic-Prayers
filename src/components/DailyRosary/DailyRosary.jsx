import React, { useState } from "react";
import { useFadingEntry0 } from "../fadingEntry.js";
import Footer from "../Footer/Footer.jsx";

import {
  BeginningOfDaily,
  DailyDecade,
  ClosingOfDaily,
} from "./PartsOfTheDaily";

const introText = "THE ONLY PRAYER YOU NEED IS THE ROSARY...";

export default function DailyRosary() {
  const [showContent, setShowContent] = useState(false);
  useFadingEntry0(setShowContent);

  return (
    <div>
      <div className="App">
        <h2 className="introText">{introText}</h2>
        <div className={`content ${showContent ? "visible" : ""}`}>
          <BeginningOfDaily />
          <DailyDecade />
          <ClosingOfDaily />
          <Footer />
        </div>
      </div>
    </div>
  );
}

// +SaveCode+ >
// See DailyRosary for specific loadup fading
