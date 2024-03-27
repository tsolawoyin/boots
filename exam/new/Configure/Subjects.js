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
  "Acids, Bases, and Salt",
  "Electrochemistry",
  "Nuclear Chemistry",
  "Industrial and Environmental Chemistry",
  "Experimental Chemistry",
  `Introduction to organic chemistry`,
  "IUPAC Nomenclature Of Organic compounds",
  "Hydrocarbons",
  "Other organic families",
  "Bifunctional families and organic giant molecules",
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
  "The Vertebrates Pisces. Amphibians. Reptiles",
  "The Vertebrate II - Birds And Mammals",
  "Plant Nutrition",
  "Animal nutrition and food substances",
  "Digestive system, Digestive enzymes and Dentition",
  "Supporting Tissues In Plants And Movement",
  "Supporting Tissues In Animals",
  "Reproduction In Flowering Plants, Germination, Fruit And Seed Dispersal",
  "Reproduction In Animals. Development And Growth",
  "Homoeostasis. Endocrine System. Plant Hormone",
  "The Nervous System",
  "Agriculture. Soil Science",
  "Common Disease. Insect Vectors",
  "Ecology: Basic Contents. Ecological Management",
  "Ecology II: Succession. Adaptation. Nutrient  Recycling",
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

const physics = new Subject("Physics", ["Elasticity"]);

const available = [english, biology, chemistry, physics];

export { available }; // makes sense for now. honestly... let me just finish things up.
