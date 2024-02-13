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
    current = exams[0]; // not probably, exam had just started...
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
  // perhaps I need to be more clever with the toggle code...
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

  let clicked = e.target.id.split("-"); // this is the btn that was actually clicked...
  // this is the one that I find confusing actually, and its high time I write an efficient algorithm...
  // one that works perfectly...

  // I am in full reasoning mode so I think I should be able to reason about it properly.

  // getting childNode sef seems useless
  let choice = findExam(exams, clicked[0], clicked[1]); // find exam 
  // this will return the exam the clicked element is pointing to
  // console.log(choice)
  // this has two possible outcome;
  // either return an exam object or false

  if (choice) {
    // if choice is already present, then we should do the following
    // if exam is already present, just set current to the exam and buildup the current question
    current = choice // this is the exam we got back from find exams shey you get.

    // there are several possibilities to this stuff.
    // 1) the first element, and the user is just clicking unnecessarily,
    // 2) the user is coming back to such question

    // either case, the user might have answered some questions already, thus
    // we need to mark already answered questions, to update the score element

    current.markQuestions(currentScoreEl);
    // and after marking, we need to show answered questions as well...
    // these things are just a matter of displaying things to the user, nothing much is happening
    // keys are supposed to be loaded before showing answers.
    // you know, in some exam scenarios, the number of questions may not be the same
    current.loadKeys(numKeys); // loading keys before showing answer makes perfect sense.

    current.showAnsweredQuestions(); // update color to match the color of current exam
    // that is it is present
    // then after that, the proper keys need to be loaded. 
    // then buiild question...
    questionEl.innerHTML = buildQuestion(current.currentQuestion); // makes sense. this is working as expected.
  } else {
    // but if questions haven't been found normally, now that is another case entirely
    let newExam = createExam(clicked[0], clicked[1], 40); // this helps create exact amount of exam...
    // after creating new exam, we need to set its current question to question 1
    newExam.nextQuestion() // this moves the pointer to 1
    // then it makes sense to push the question into the exams array
    exams.push(newExam);
    // now, we set the currentExam to newExam
    current = newExam; // normally...
    // I don't think there is anything to mark here, honestly, it's just a fresh exam for crying out loud
    // and there is no need to show any answer
    // the only thing we need to do is load keys properly
    current.loadKeys(numKeys); 
    // and render the first question.
    // update scores after loading the keys...
    current.markQuestions(currentScoreEl);

    questionEl.innerHTML = buildQuestion(current.currentQuestion);
  }
  // working perfectly
});

// helps focus // coming back to focus later
// I will solve this problem later.
// will work solo on this one.. lowkey. no problem.
// now, let's work on this one...
examKeys.addEventListener("click", (e) => {
  // getting the clicked element
  let clicked = e.target.id.split("-"); // and getting the classname, and splitting things up...
  // this clicked element is what is clicked gangan...
  // currentExam is the exam that we just got from clicking the element
  // and it's not faulty...
  let currentExam = findExam(exams, clicked[0], clicked[1]);
  // it is absolutely fine...

  let children = Array.from(examKeys.children);
  // now, getting the 

  for (let c of children) {
    let sbj = c.id.split("-");

    if (currentExam.subject == sbj[0] && currentExam.topic == sbj[1]) {
      c.className = "btn btn-secondary";
    } else {
      c.className = "btn";
    }
  }

  // this thing requires calculation
});

function findExam(exams, subject, topic) {
  for (let e of exams) {
    if (e.subject.toLowerCase() == subject.toLowerCase() && e.topic.toLowerCase() == topic.toLowerCase()) return e;
  }
  return false;
}

// at least, this is the basic thing to do. shey you get
// this is where all key events resides...
function toggleExam(exam, cond) {
  if (!exam.currentQuestion.userAnswer && !submitted) {
    // if user haven't answered the current question and haven't submitted, this code should run.
    if (cond == "next") {
      toggleHelper(exam) //
      exam.nextQuestion(); // then next
      questionEl.innerHTML = buildQuestion(exam.currentQuestion); // and build
    } else if (cond == "prev") {
      toggleHelper(exam); //
      exam.previousQuestion(); // then prev question
      questionEl.innerHTML = buildQuestion(exam.currentQuestion);
    } else {
      exam.jumpToQuestion(cond);
      questionEl.innerHTML = buildQuestion(exam.currentQuestion);
    }
  } else {
    // just go to next question
    if (cond == "next") {
      exam.nextQuestion();
    } else if (cond == "prev") {
      exam.previousQuestion();
    } else {
      exam.jumpToQuestion(cond);
    }
    questionEl.innerHTML = buildQuestion(exam.currentQuestion);
  }
}

function toggleHelper(exam) {
  // so I can easily reason about this code here...
  exam.updateAnswer(); // update the answer of the current question before moving on, it makes sense to update before marking
  exam.markQuestions(currentScoreEl); // mark question, 
  exam.showAnsweredQuestions(); // core feature of boots...then show answer immediately...
  exam.changeColor(currentScoreEl); // update the color of the score element
}

// this is sweet
// other stuffs that remains is marking the questions, saving answers, and the likes. Almost done.

function calcTotalScore(exams) {
  let score = 0;
  for (let e of exams) {
    score += e.score;
  }
  return score.toFixed(2);
}

function endExam() {
  clearInterval(timeInterval); // stop time
  let totalScore = calcTotalScore(exams); // calculate total score
  alert(`Your overall score is ${totalScore}`); // and inform user of it
  submitted = true; // and stop all marking
}
