import React from "react";
import { prayers, otherTexts } from "../ListOfPrayers.js";

export function BeginningOfServite() {
  return (
    <>
      <p>{otherTexts.beginningSign}</p>
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
    <>
      <h2 className="custom-margin-top">THE SERVITE DECADE IS AS FOLLOWS:</h2>
      <h2>-- DECLARE THE NEXT SORROW</h2>
      <h2>-- PRAY 1 OUR FATHER</h2>
      <h2>-- PRAY 7 HAIL MARY'S</h2>
      <h2>-- PRAY 1 MOST MERCIFUL MOTHER</h2>
      <h2>-- PRAY 1 DECADE FOR EVERY SORROW</h2>
      <h2 className="custom-margin-top">THE SEVEN SORROWS OF MARY:</h2>
      <p>-- The First Sorrow: The Prophecy of Simeon</p>
      <p>-- The Second Sorrow: The Flight Into Egypt</p>
      <p>-- The Third Sorrow: The Loss of Jesus in the Temple</p>
      <p>-- The Fourth Sorrow: Mary Meets Jesus on His Way to Calvary</p>
      <p>-- The Fifth Sorrow: Mary Stands at the Foot of the Cross</p>
      <p>-- The Sixth Sorrow: Jesus is Taken Down From the Cross</p>
      <p>-- The Seventh Sorrow: The Burial of Jesus</p>
    </>
  );
}

export function ClosingOfServite() {
  return (
    <div>
      <h2 className="custom-margin-top">THE CLOSING PRAYERS:</h2>
      <p>
        PRAY ONCE: Queen of Martyrs, your heart suffered so much. I beg you, by
        the merits of the tears you shed in these terrible and sorrowful times,
        to obtain for me and all the sinners of the world the grace of complete
        sincerity and repentance. Amen.
      </p>
      <p>
        PRAY THRICE: Mary, who was conceived without sin and who suffered for
        us, pray for us.
      </p>
      <p>{otherTexts.endingSign}</p>
    </div>
  );
}
