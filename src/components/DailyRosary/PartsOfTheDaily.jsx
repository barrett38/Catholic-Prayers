import React from "react";
import prayers from "../ListOfPrayers.js";
import Mysteries from "./Mysteries.jsx";

export function BeginningOfDaily() {
  return (
    <div>
      <p>Start with the Sign of the Cross: "{prayers.signOfTheCross}"</p>
      <h2 className="custom-margin-top">PRAY THE APOSTLES'S CREED:</h2>
      <p>{prayers.apostlesCreed}</p>
      <h2>-- PRAY 1 OUR FATHER</h2>
      <h2>-- PRAY 3 HAIL MARY'S</h2>
      <h2>-- PRAY 1 GLORY BE</h2>
    </div>
  );
}

export function DailyDecade() {
  return (
    <div>
      <h2 className="custom-margin-top">A DECADE IS AS FOLLOWS:</h2>
      <h2>-- DECLARE THE NEXT MYSTERY</h2>
      <h2>-- PRAY 1 OUR FATHER</h2>
      <h2>-- PRAY 10 HAIL MARY'S</h2>
      <h2>-- PRAY 1 GLORY BE</h2>
      <h2>-- PRAY 1 O MY JESUS</h2>
      <h2>-- PRAY 1 DECADE FOR EVERY MYSTERY</h2>
      <h2>
        <Mysteries />
      </h2>
    </div>
  );
}

export function ClosingOfDaily() {
  return (
    <div>
      <>
        <h2 className="custom-margin-top">THE CLOSING PRAYERS:</h2>
        <p>{prayers.hailHolyQueen}</p>
        <p>{prayers.rosaryClosing}</p>
        <p>PRAY 1 PRAYER TO SAINT MICHAEL</p>
      </>
      <p className="custom-margin-bottom">{prayers.signOfTheCross}</p>
    </div>
  );
}
