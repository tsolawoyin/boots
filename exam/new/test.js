
import { Exam } from "./Exam.js";
import { chemistryQuestions} from "../questionDB/chmQuestions.js";

const chemistryExam = new Exam("Chemistry", "general", chemistryQuestions, 20);

chemistryExam.nextQuestion();
console.log(chemistryExam.currentQuestion);
chemistryExam.jumpToQuestion(15);
console.log(chemistryExam.currentQuestion);
// makes sense. Mafo... 