import React from "react";
import { saintMichael } from "../../PrayersArray.js";

export default function SaintMichael() {
  return (
    <div>
      <h2>{saintMichael.name}</h2>
      <p>
        {saintMichael.text.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
