class Subject {
  constructor(title, topics) {
    this.title = title;
    this.topic = topics;
  }
  // methods come later...
}

const chemistry = new Subject("Chemistry", [
  "Atomic structure",
  "Atomic structure II",
  "Ionic bonding",
  "Covalent bonding",
  "Chemical bonding",
  "Chemical calculation LTE",
  "Air and air pollution",
  "Nitrogen",
  "Carbon",
]);

const biology = new Subject("Biology", [
    "The Cell Structure And Functions Of Cell Components",
    "Living Organisms And Level Of Organisation",
    "The Cell And Its Environment",
    "Evolution Among Viruses Monera, Protista And Fungi",
    "Evolution among plants",
    "Higher Plants",
    "Evolution Among Invertebrates",
]);

const english = new Subject("English", [
    "Antonyms I",
    "Antonyms II",
    "Antonyms III",
    "Antonyms IV",
    "Synonyms I",
    "Synonyms II",
    "Spelling mistakes",
    "Common mistakes",
]);

const available = [english, biology, chemistry];

export { available };
