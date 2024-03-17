class Subject {
  constructor(title, topics) {
    this.title = title;
    this.topic = topics;
  }
  // methods come later...
}

// arranged chemistry according to lamlard chemistry textbook...
const chemistry = new Subject("Chemistry", [
  "General",
  "Matter",
  "Atomic structure and Periodicity",
  "Chemical bonding",
  "Descriptive Chemistry",
  "Stoichiometry",
  `Kinetic Theory of Matter & Gas laws`,
  "Energetics",
  "Chemical kinetics",
  "Electrochemistry",
  "Nuclear Chemistry",
  "Industrial and Environmental Chemistry",
]);

const biology = new Subject("Biology", [
  "General",
  "The Cell Structure And Functions Of Cell Components",
  "Living Organisms And Level Of Organisation",
  "The Cell And Its Environment",
  "Evolution Among Viruses, Monera, Protista And Fungi",
  "Evolution among plants",
  "Higher Plants",
  "Evolution Among Invertebrates",
  "The Arthropods",
  // "The Vertebrates Pisces. Amphibians. Reptiles",
  // "The Vertebrate II-Birds And Mammals",
  // "Plant Nutrition",
  // "Animal nutrition and food substances",
  // "Digestive system, Digestive enzymes and Dentition",
  // "Supporting Tissues In Plants And Movement",
  // "Supporting Tissues In Animals",
]);
// this is going to be all english for now...
// I will finish this as soon as possible...
const english = new Subject("English", [
  "General",
  "Antonyms",
  "Synonyms",
  "Noun | Pronoun",
  "Verb",
  "Prepositions",
  "Adjectives, Articles, and Determiners | Adverbs",
  "Rules of concord",
  "Interpretation of words and expressions",
  "Interrogative question tags, reported speech",
  "Spelling mistakes",
  "Common mistakes",
]);

const available = [english, biology, chemistry];

export { available }; // makes sense for now. honestly... let me just finish things up.
