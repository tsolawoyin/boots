class Subject {
  constructor(title, topics) {
    this.title = title;
    this.topic = topics;
  }
  // methods come later...
}

const chemistry = new Subject("Chemistry", [
  "1. Atomic structure",
  "2. Chemical bonding",
  "3. Stoichiometry",
  '4. Descriptive Chemistry',
  `5. Kinetic Theory of Matter & Gas laws`,
  "6. Nature of matter", //<= I should done this by the time I get there... normally... 
  "7. Air and air pollution",
  "general"
]);

const biology = new Subject("Biology", [
    "1. The Cell Structure And Functions Of Cell Components",
    "2. Living Organisms And Level Of Organisation",
    "3. The Cell And Its Environment",
    "4. Evolution Among Viruses, Monera, Protista And Fungi",
    "5. Evolution among plants",
    "6. Higher Plants",
    "7. Evolution Among Invertebrates",
    "8. The Arthropods",
    "9. The Vertebrates Pisces. Amphibians. Reptiles",
    "10. The Vertebrate II-Birds And Mammals",
    "11. Plant Nutrition",
    "12. Animal nutrition and food substances",
    "13. Digestive system, Digestive enzyme and Dentition",
    "14. Supporting Tissues In Plants And Movement",
    "15. Supporting Tissues In Animals",
    "general"
]);
// this is going to be all english for now...
// I will finish this as soon as possible...
const english = new Subject("English", [
    "1. Antonyms",
    "2. Synonyms",
    "3. Noun | Pronoun",
    "4. Verb",
    "5. Prepositions",
    "6. Adjectives, Articles, and Determiners | Adverbs",
    "7. Rules of concord",
    '8. Interpretation of words and expressions',
    "9. Idioms and sayings",
    "10. Phrasal verbs",
    "11. Interrogative question tags, reported speech",
    "12. Spelling mistakes",
    "13. Common mistakes",
    "general"
]);

const available = [english, biology, chemistry];

export { available }; // makes sense for now. honestly... let me just finish things up.
