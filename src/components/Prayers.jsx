import React from "react";
import {
  signOfTheCross,
  actOfContrition,
  apostlesCreed,
  ourFather,
  hailMary,
  gloryBe,
  saintMichael,
  oMyJesus,
} from "../PrayersArray.js";

function SignOfTheCross() {
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

export default SignOfTheCross;
