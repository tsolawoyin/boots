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
  "3. Nomenclature",
  "4. Chemical calculations",
  "5. Nature of matter",
  "6. Air and air pollution",
  "7. Nitrogen",
  "8. Carbon",
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
    "8. The Vertebrates Pisces. Amphibians. Reptiles",
    "9. The Vertebrate II-Birds And Mammals",
    "10. Plant Nutrition",
    "11. Animal nutrition and food substances",
    "12. Digestive system, Digestive enzyme and Dentition",
    "13. Supporting Tissues In Plants And Movement",
    "14. Supporting Tissues In Animals",
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
    "6. Adjectives, Articles, and Determiners",
    "7. Adverbs, Conjunctions, Interjection, Punctuation",
    "8. Rules of concord",
    '9. Interpretation of words and expressions',
    "10. Idioms and sayings",
    "11. Phrasal verbs",
    "12. Interrogative question tags, reported speech",
    "13. Spelling mistakes",
    "14. Common mistakes",
    "general"
]);

const available = [english, biology, chemistry];

export { available }; // makes sense for now. honestly... let me just finish things up.
