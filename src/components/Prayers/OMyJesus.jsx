import React from "react";
import { oMyJesus } from "./PrayersArray.js";

export default function OMyJesus() {
  return (
    <div>
      <h2>{oMyJesus.name}</h2>
      <p>
        {oMyJesus.text.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
