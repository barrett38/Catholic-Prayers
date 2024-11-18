import React from "react";

export function getMysteries() {
  const dayOfWeek = new Date().getDay();
  const mysteries = {
    0: [
      "The Resurrection",
      "The Ascension",
      "The Descent of the Holy Spirit",
      "The Assumption",
      "The Coronation of Mary",
    ], // Sunday
    1: [
      "The Annunciation",
      "The Visitation",
      "The Nativity",
      "The Presentation",
      "The Finding of Jesus in the Temple",
    ], // Monday
    2: [
      "The Agony in the Garden",
      "The Scourging at the Pillar",
      "The Crowning with Thorns",
      "The Carrying of the Cross",
      "The Crucifixion",
    ], // Tuesday
    3: ["The Glorious Mysteries"], // Wednesday
    4: ["The Luminous Mysteries"], // Thursday
    5: ["The Sorrowful Mysteries"], // Friday
    6: ["The Joyful Mysteries"], // Saturday
  };

  return mysteries[dayOfWeek] || [];
}

const theMysteries = () => {
  const mysteries = getMysteries();

  return (
    <div>
      {getMysteries.map((mystery, index) => (
        <p key={index}>{mystery}</p>
      ))}
    </div>
  );
};

export default theMysteries;

// +SaveCode+
// Code is conditional on what day it is.
