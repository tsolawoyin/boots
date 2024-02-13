import { buildQuestion } from "./buildQuestion.js";
import {
  examKeys,
  numKeys,
  pns,
  currentScoreEl,
} from "./Configure/constants.js";
import { exams, timeInterval } from "./start.js";
import { questionEl } from "./Configure/constants.js";
import { createExam } from "./generateExam.js";

// current represents current exam...
let current;
let submitted = false;

// used for toggling questions
pns.addEventListener("click", (e) => {
  if (!current) {
    // probably because exam has just started
    current = exams[0];
  }

  let clicked = e.target;

  if (clicked.id == "next") {
    // console.log(current.currentQuestion)
    toggleExam(current, "next");
  } else if (clicked.id == "prev") {
    toggleExam(current, "prev");
  } else {
    // if submit, just clear interval
    endExam();
  }
});

// used for jumping to questions
numKeys.addEventListener("click", (e) => {
  if (!current) {
    // probably because exam has just started
    current = exams[0];
  }

  let clicked = e.target;

  // there is no need for checking anything
  toggleExam(current, Number(clicked.textContent));
});

// used for changing between exams
examKeys.addEventListener("click", (e) => {
  // it's just about changing questions and those sort of things that's all...
  let clicked = e.target.id.split("-");

  // getting childNode sef seems useless
  let choice = findExam(exams, clicked[0], clicked[1]); // find exam

  if (choice) {
    // if exam is already present, just set current to the exam and buildup the current question
    current = choice; // change to choice
    current.markQuestions(currentScoreEl);
    current.showAnsweredQuestions(); // update color to match the color of current exam
    // that is it is present
    numKeys.innerHTML = current.loadKeys();
    questionEl.innerHTML = buildQuestion(current.currentQuestion);
  } else {
    // then we get questions at runtime...
    // it means it is not yet available, then bring it to existence
    let ex = createExam(clicked[0], clicked[1], 40); // creating exam and making it alive...
    // push to current
    ex.nextQuestion(); // to make it start at 1
    exams.push(ex);
    current = ex; // normally...
    current.markQuestions(currentScoreEl);
    current.showAnsweredQuestions(); // update color to match the color of current exam /
    numKeys.innerHTML = current.loadKeys();
    questionEl.innerHTML = buildQuestion(current.currentQuestion);
    // then build question
  }
});

// helps focus
examKeys.addEventListener("click", (e) => {
  let clicked = e.target.id.split("-");

  let curEx = findExam(exams, clicked[0], clicked[1]); // this is kind of faulty...

  let children = Array.from(examKeys.children);

  for (let c of children) {
    let sbj = c.id.split("-");

    if (curEx.subject == sbj[0] && curEx.topic && sbj[1]) {
      console.log("yes");
      c.className = "btn btn-secondary";
    } else {
      c.className = "btn";
    }
  }

  // this thing requires calculation
});

function findExam(exams, subject, topic) {
  for (let e of exams) {
    if (e.subject == subject && e.topic == topic) return e;
  }
  return false;
}

// at least, this is the basic thing to do. shey you get
// this is where all key events resides...
function toggleExam(exam, cond) {
  if (!exam.currentQuestion.userAnswer && !submitted) {
    if (cond == "next") {
      exam.updateAnswer(); // update the answer of the current question before moving on
      exam.markQuestions(currentScoreEl); // mark questions
      exam.showAnsweredQuestions(); // core feature of boots... show red/green/white
      exam.changeColor(currentScoreEl); // update the color
      exam.nextQuestion(); // then next
      questionEl.innerHTML = buildQuestion(exam.currentQuestion); // and build
    } else if (cond == "prev") {
      exam.updateAnswer(); // update the answer of the current question before moving on
      exam.markQuestions(currentScoreEl);
      exam.showAnsweredQuestions(); // core feature of boots... show red/green/white
      exam.changeColor(currentScoreEl);
      exam.previousQuestion();
      questionEl.innerHTML = buildQuestion(exam.currentQuestion);
    } else {
      // this will not be submit
      exam.jumpToQuestion(cond);
      questionEl.innerHTML = buildQuestion(exam.currentQuestion);
    }
  } else {
    // just go to next question
    if (cond == "next") {
        exam.nextQuestion()
    } else if (cond == "prev") {
        exam.previousQuestion()
    } else {
        exam.jumpToQuestion(cond)
    }
    questionEl.innerHTML = buildQuestion(exam.currentQuestion);
  }
}

// this is sweet
// other stuffs that remains is marking the questions, saving answers, and the likes. Almost done.

function calcTotalScore(exams) {
  let score = 0;
  for (let e of exams) {
    score += e.score;
  }
  return score;
}

function endExam() {
  clearInterval(timeInterval); // stop time
  let totalScore = calcTotalScore(exams); // calculate total score
  alert(`Your overall score is ${totalScore}`); // and inform user of it
  submitted = true; // and stop all marking
}
