import React from "react";
import { ourFather } from "./PrayersArray.js";

export default function OurFather() {
  return (
    <div>
      <h2>{ourFather.name}</h2>
      <p>
        {ourFather.text.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
