// Mysteries.jsx
import React from "react";
import { getMysteries } from "./getMysteries";

const Mysteries = () => {
  const { title, list } = getMysteries();

  return (
    <div>
      <p>{title}</p>
      {list.map((mystery, index) => (
        <p key={index}>-- {mystery}</p>
      ))}
    </div>
  );
};

export default Mysteries;
