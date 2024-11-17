import React from "react";
import { actOfContrition } from "../Prayers/PrayersArray.js";

export default function ActOfContrition() {
  return (
    <div>
      <h2>{actOfContrition.name}</h2>
      <p>
        {actOfContrition.text.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
