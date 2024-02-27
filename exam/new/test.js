import { Exam } from "./Exam/Exam.js";
import { chemistryQuestions } from "../chmQuestions.js";
import { biologyQuestions } from "../bioQuestions.js";

let biologyQuestion = new Exam(
  "Biology",
  "general",
  biologyQuestions,
  40
);

console.log(biologyQuestion);
// stand gidi gba...

// the next function is not problematic...
