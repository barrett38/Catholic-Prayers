import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer.jsx";
import { saintMichael } from "../DailyRosary/PrayersArray.js";

const prayers = {
  signOfTheCross: `In the name of the Father, and of the Son, and of the Holy Spirit. Amen.`,
  apostlesCreed: `I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, His only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; He descended into hell; on the third day He rose again from the dead; He ascended into heaven, and is seated at the right hand of God the Father almighty; from thence He will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.`,
  ourFather: `Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.`,
  hailMary: `Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.`,
  gloryBe: `Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.`,
  oMyJesus: `O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those in most need of Thy mercy. Amen.`,
  actOfContrition: `O my God, I am heartily sorry for having offended Thee, and I detest all my sins, because I dread the loss of heaven and the pains of hell; but most of all because they offend Thee, my God, who art all-good and deserving of all my love. I firmly resolve, with the help of Thy grace, to confess my sins, to do penance, and to amend my life. Amen.`,
  mostMercifulMother: `Most merciful Mother, remind us always about the sorrows of your Son, Jesus. Amen.`,
  saintMichael: `Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the heavenly host, by the power of God, thrust into hell Satan and all the wicked spirits who prowl about the world seeking the ruin of souls. Amen.`,
};

export default function IndividualPrayers() {
  const [showContent, setShowContent] = useState(false);

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
        <div className={`content ${showContent ? "visible" : ""}`}>
          <h2>THE SIGN OF THE CROSS</h2>
          <p>{prayers.signOfTheCross}</p>
          <h2>THE APOSTLES CREED</h2>
          <p>{prayers.apostlesCreed}</p>
          <h2>OUR FATHER</h2>
          <p>{prayers.ourFather}</p>
          <h2>HAIL MARY</h2>
          <p>{prayers.hailMary}</p>
          <h2>GLORY BE</h2>
          <p>{prayers.gloryBe}</p>
          <h2>O MY JESUS</h2>
          <p>{prayers.oMyJesus}</p>
          <h2>ACT OF CONTRITION</h2>
          <p>{prayers.actOfContrition}</p>
          <h2>MOST MERCIFUL MOTHER</h2>
          <p>{prayers.mostMercifulMother}</p>
          <h2>SAINT MICHAEL</h2>
          <p className="custom-margin-bottom">{saintMichael.text}</p>
          <Footer />
        </div>
      </div>
    </div>
  );
}
