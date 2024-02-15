import { Exam } from "./Exam/Exam.js";
import { chemistryQuestions } from "../questionDB/chmQuestions.js";

let chemistryExam = new Exam("Chemistry", "Nitrogen", chemistryQuestions, 40);

chemistryExam.nextQuestion();
chemistryExam.nextQuestion();
console.log(chemistryExam.currentQuestion);
console.log(chemistryExam.unseenQuestions.length);
console.log(chemistryExam.seenQuestions.length);
console.log(chemistryExam.quantity);

// stand gidi gba...

// the next function is not problematic...