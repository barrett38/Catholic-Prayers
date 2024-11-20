export function getMysteries() {
  const dayOfWeek = new Date().getDay();
  const mysteries = {
    0: {
      title: "THE GLORIOUS MYSTERIES:",
      list: [
        "The Resurrection",
        "The Ascension",
        "The Descent of the Holy Spirit",
        "The Assumption",
        "The Coronation of Mary",
      ],
    }, // Sunday
    1: {
      title: "THE JOYFUL MYSTERIES:",
      list: [
        "The Annunciation",
        "The Visitation",
        "The Nativity",
        "The Presentation",
        "The Finding of Jesus in the Temple",
      ],
    }, // Monday
    2: {
      title: "THE SORROWFUL MYSTERIES:",
      list: [
        "The Agony in the Garden",
        "The Scourging at the Pillar",
        "The Crowning with Thorns",
        "The Carrying of the Cross",
        "The Crucifixion",
      ],
    }, // Tuesday
    3: {
      title: "THE GLORIOUS MYSTERIES:",
      list: [
        "The Resurrection",
        "The Ascension",
        "The Descent of the Holy Spirit",
        "The Assumption",
        "The Coronation of Mary",
      ],
    }, // Wednesday
    4: {
      title: "THE LUMINOUS MYSTERIES:",
      list: [
        "The Baptism of Jesus in the Jordan",
        "The Wedding at Cana",
        "The Proclamation of the Kingdom",
        "The Transfiguration",
        "The Institution of the Eucharist",
      ],
    }, // Thursday
    5: {
      title: "THE SORROWFUL MYSTERIES:",
      list: [
        "The Agony in the Garden",
        "The Scourging at the Pillar",
        "The Crowning with Thorns",
        "The Carrying of the Cross",
        "The Crucifixion",
      ],
    }, // Friday
    6: {
      title: "THE JOYFUL MYSTERIES:",
      list: [
        "The Annunciation",
        "The Visitation",
        "The Nativity",
        "The Presentation",
        "The Finding of Jesus in the Temple",
      ],
    }, // Saturday
  };

  return mysteries[dayOfWeek] || { title: "Unknown Mysteries", list: [] };
}
