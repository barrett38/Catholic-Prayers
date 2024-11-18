import React from "react";
import { prayers, otherTexts } from "../ListOfPrayers.js";

export function BeginningOfServite() {
  return (
    <>
      <p>{otherTexts.endingSign}</p>
      <h2 className="custom-margin-top">OFFER THIS ROSARY TO GOD:</h2>
      <p>{prayers.serviteRosaryOffering}</p>
      <h2>-- PRAY 1 OUR FATHER</h2>
      <h2>-- PRAY 3 HAIL MARY'S</h2>
      <h2>-- PRAY 1 MOST MERCIFUL MOTHER</h2>
    </>
  );
}

export function ServiteDecade() {
  return (
    <div>
      <h2 className="custom-margin-top">THE SERVITE DECADE IS AS FOLLOWS:</h2>
      <h2>-- DECLARE THE NEXT SORROW</h2>
      <h2>-- PRAY 1 OUR FATHER</h2>
      <h2>-- PRAY 7 HAIL MARY'S</h2>
      <h2>-- PRAY 1 MOST MERCIFUL MOTHER</h2>
      <h2>-- PRAY 1 DECADE FOR EVERY SORROW</h2>
      <h2 className="custom-margin-top">THE SEVEN SORROWS OF MARY:</h2>
      <p>The First Sword of Sorrow: The Prophecy of Simeon</p>
      <p>The Second Sword of Sorrow: The Flight Into Egypt</p>
      <p>The Third Sword of Sorrow: The Loss of Jesus in the Temple</p>
      <p>The Fourth Sword of Sorrow: Mary Meets Jesus on His Way to Calvary</p>
      <p>The Fifth Sword of Sorrow: Mary Stands at the Foot of the Cross</p>
      <p>The Sixth Sword of Sorrow: Jesus is Taken Down From the Cross</p>
      <p>The Seventh Sword of Sorrow: The Burial of Jesus</p>
    </div>
  );
}

export function ClosingOfServite() {
  return <div></div>;
}
