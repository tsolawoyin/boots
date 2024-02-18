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
  "Nomenclature",
  "Formula calculations",
  "Air and air pollution",
  "Nitrogen",
  "Carbon",
  "Nature of matter",
  "Sulphur",
  "general"
]);

const biology = new Subject("Biology", [
    // "The Cell Structure And Functions Of Cell Components",
    // "Living Organisms And Level Of Organisation",
    "The Cell And Its Environment",
    // "Evolution Among Viruses Monera, Protista And Fungi",
    // "Evolution among plants",
    // "Higher Plants",
    // "Evolution Among Invertebrates",
    // "The Vertebrates Pisces. Amphibians. Reptiles",
    // "The Vertebrate II-Birds And Mammals",
    // "Plant Nutrition",
    // "Animal nutrition and food substances",
    // "Digestive system, Digestive enzyme and Dentition",
    // "Supporting Tissues In Plants And Movement",
    // "Supporting Tissues In Animals",
    // "general"
]);

const english = new Subject("English", [
    "Antonyms I",
    "Antonyms II",
    "Antonyms III",
    "Antonyms IV",
    "Synonyms I",
    "Synonyms II",
    "Noun | Pronoun",
    "Noun | Pronoun II",
    "Verb I",
    "Spelling mistakes",
    "Common mistakes",
    "general"
]);

const available = [english, biology, chemistry];

export { available };
