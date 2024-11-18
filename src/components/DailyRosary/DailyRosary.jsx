import React, { useEffect, useState } from "react";
import { apostlesCreed } from "./PrayersArray.js";

const signOfTheCross1 = `Finally, we end with the Sign of the Cross: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen."`;
const introText = "THE ONLY PRAYER YOU NEED IS THE ROSARY...";
const signOfTheCross = `Start with the Sign of the Cross: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen."`;

export default function DailyRosary() {
  const [showContent, setShowContent] = useState(false);

  // See variatiation in ServiteRosaryOffering.jsx
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Delay showing content for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="App">
        <h2 className="introText">{introText}</h2>
        <div className={`content ${showContent ? "visible" : ""}`}>
          <p>{signOfTheCross}</p>
          <h2 className="custom-margin-top">PRAY THE APOSTLES'S CREED:</h2>
          <p>
            {apostlesCreed.text.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <h2>-- PRAY 1 OUR FATHER</h2>
          <h2>-- PRAY 3 HAIL MARY'S</h2>
          <h2>-- PRAY 1 GLORY BE</h2>
          <h2 className="custom-margin-top">A DECADE IS AS FOLLOWS:</h2>
          <h2>-- DECLARE THE NEXT MYSTERY</h2>
          <h2>-- PRAY 1 OUR FATHER</h2>
          <h2>-- PRAY 10 HAIL MARY'S</h2>
          <h2>-- PRAY 1 GLORY BE</h2>
          <h2>-- PRAY 1 O MY JESUS</h2>
          <h2>-- PRAY 1 DECADE FOR EVERY MYSTERY</h2>
          <>
            <h2 className="custom-margin-top">HERE ARE TODAY'S MYSTERIES:</h2>
            <p>Mysteries will go here.</p>
            <h2 className="custom-margin-top">THE CLOSING PRAYERS:</h2>
            <p>
              Hail, holy Queen, Mother of mercy, our life, our sweetness, and
              our hope. To thee do we cry, poor banished children of Eve; to
              thee do we send up our sighs, mourning and weeping in this valley
              of tears. Turn then, most gracious advocate, thine eyes of mercy
              toward us, and after this, our exile, show unto us the blessed
              fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin
              Mary.
            </p>
            <p>
              Pray for us, O holy Mother of God, that we may be made worthy of
              the promises of Christ.
            </p>
            <p>
              O God, whose only begotten Son, by His life, death, and
              resurrection, has purchased for us the rewards of eternal life;
              grant, we beseech Thee, that meditating upon these mysteries of
              the Most Holy Rosary of the Blessed Virgin Mary, we may imitate
              what they contain and obtain what they promise, through the same
              Christ our Lord. Amen.
            </p>
          </>
          <p className="custom-margin-bottom">{signOfTheCross1}</p>
          <p className="custom-margin-top-of-footer">Today's Daily Rosary</p>
          <p className="custom-margin-bottom-of-footer">Individual Prayers</p>
        </div>
      </div>
    </div>
  );
}
