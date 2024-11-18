import React from "react";
import { maryWithoutSin } from "../Prayers/PrayersArray.js";

export default function MaryWithoutSin() {
  return (
    <div>
      <h2>{maryWithoutSin.name}</h2>
      <p>
        {maryWithoutSin.text.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
