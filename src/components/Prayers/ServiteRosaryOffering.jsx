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
      <h2>-- PRAY 3 HAIL MARY'S</h2>
      <h2>-- PRAY 1 MOST MERCIFUL MOTHER</h2>
    </div>
  );
}
