import React from "react";
import { apostlesCreed } from "../../PrayersArray.js";

export default function ApostlesCreed() {
  return (
    <div>
      <h2>{apostlesCreed.name}</h2>
      <p>
        {apostlesCreed.text.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
