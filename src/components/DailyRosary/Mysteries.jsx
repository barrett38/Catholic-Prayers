// Mysteries.jsx
import React from "react";
import { getMysteries } from "./getMysteries";

const Mysteries = () => {
  const mysteries = getMysteries();

  return (
    <div>
      {mysteries.map((mystery, index) => (
        <p key={index}>{mystery}</p>
      ))}
    </div>
  );
};

export default Mysteries;
