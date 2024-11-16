import React from "react";
import prayers from "../PrayersArray.json";

function SignOfTheCross() {
  const signOfTheCrossPrayer = prayers.find(
    (prayer) => prayer.name === "Sign of the Cross"
  );

  return (
    <div>
      {signOfTheCrossPrayer && (
        <div>
          <h2>{signOfTheCrossPrayer.name}</h2>
          <p>{signOfTheCrossPrayer.text}</p>
        </div>
      )}
    </div>
  );
}

export default SignOfTheCross;
