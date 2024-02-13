import { buildQuestion } from "./buildQuestion.js";
import { numKeys, pns } from "./Configure/constants.js";
import { exams } from "./start.js";
import { questionEl } from "./Configure/constants.js";

let current;

pns.addEventListener("click", e => {

    if (!current) {
        // probably because exam has just started
        current = exams[0];
    }

    let clicked = e.target;

    if (clicked.id == "next") {
        toggleExam(current, "next");
    } else if (clicked.id == "prev") {
        toggleExam(current, "prev")
    } else {
        //
    }
})

numKeys.addEventListener("click", e => {
    if (!current) {
        // probably because exam has just started
        current = exams[0];
    }

    let clicked = e.target;

    // there is no need for checking anything
    toggleExam(current, clicked.textContent)
})
// at least, this is the basic thing to do. shey you get
// this is where all key events resides...
function toggleExam(exam, cond) {
    if (cond == "next") {
        exam.nextQuestion();
        questionEl.innerHTML = buildQuestion(exam.currentQuestion); 
    } else if (cond == "prev") {
        exam.previousQuestion();
        questionEl.innerHTML = buildQuestion(exam.currentQuestion);
    } else {
        // this will not be submit
        exam.jumpToQuestion(cond);
        questionEl.innerHTML = buildQuestion(exam.currentQuestion);
    }
}