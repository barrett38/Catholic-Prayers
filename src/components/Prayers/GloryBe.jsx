import React from "react";
import { gloryBe } from "./PrayersArray.js";

export default function GloryBe() {
  return (
    <div>
      <h2>{gloryBe.name}</h2>
      <p>
        {gloryBe.text.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
