import React, { useState } from "react";
import { useFadingEntry0 } from "../fadingEntry.js";
import Footer from "../Footer/Footer.jsx";
import "./prayers.css";
import { prayers, otherTexts } from "../ListOfPrayers.js";

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
          {/*  */}
          <h2 className="custom-margin-top">THE CLOSING PRAYERS:</h2>
          <p>
            PRAY ONCE: Queen of Martyrs, your heart suffered so much. I beg you,
            by the merits of the tears you shed in these terrible and sorrowful
            times, to obtain for me and all the sinners of the world the grace
            of complete sincerity and repentance. Amen.
          </p>
          <p>
            PRAY THRICE: Mary, who was conceived without sin and who suffered
            for us, pray for us.
          </p>
          <p className="custom-margin-bottom">{otherTexts.beginningSign}</p>
          <Footer />
        </div>
      </div>
    </div>
  );
}
