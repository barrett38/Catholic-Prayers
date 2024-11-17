import React from "react";
import { signOfTheCross } from "./PrayersArray.js";

export default function SignOfTheCross() {
  return (
    <div>
      <h2>{signOfTheCross.name}</h2>
      <p>
        {signOfTheCross.text.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
