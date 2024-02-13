import { Exam } from "./Exam/Exam.js";
import { chemistryQuestions } from "../questionDB/chmQuestions.js";

let chemistryExam = new Exam("Chemistry", "Nitrogen", chemistryQuestions, 40);
console.log(chemistryExam)

chemistryExam.nextQuestion()
console.log(chemistryExam.currentQuestion);
chemistryExam.nextQuestion()
console.log(chemistryExam.currentQuestion);
chemistryExam.jumpToQuestion(34)
console.log(chemistryExam.currentQuestion)
chemistryExam.nextQuestion()
console.log(chemistryExam.currentQuestion);
chemistryExam.nextQuestion()
console.log(chemistryExam.currentQuestion)
chemistryExam.nextQuestion()
console.log(chemistryExam.currentQuestion)
chemistryExam.previousQuestion()
console.log(chemistryExam.currentQuestion)
chemistryExam.nextQuestion()
console.log(chemistryExam.currentQuestion)
chemistryExam.nextQuestion()
chemistryExam.nextQuestion()
chemistryExam.nextQuestion()
chemistryExam.nextQuestion()
chemistryExam.nextQuestion()
chemistryExam.previousQuestion()
console.log(chemistryExam.currentQuestion)

// the next function is not problematic...