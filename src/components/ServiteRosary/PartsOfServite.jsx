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
  return <div></div>;
}

export function ClosingOfServite() {
  return <div></div>;
}
