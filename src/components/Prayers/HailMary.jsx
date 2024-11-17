import React from "react";
import { hailMary } from "../../PrayersArray.js";

export default function HailMary() {
  return (
    <div>
      <h2>{hailMary.name}</h2>
      <p>
        {hailMary.text.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
