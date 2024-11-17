import React from "react";
import { serviteRosaryOffering } from "./PrayersArray.js";

export default function ServiteRosaryOffering() {
  return (
    <div>
      <p>
        {serviteRosaryOffering.text.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
