import { examInterface } from "./declarations.js";
import { updateAnswer } from "./updateAnswer.js";
import { chooseQuestion } from "./chooseQuestion.js";
import { questionBox } from "./declarations.js";
import { endExam } from "./endExam.js";
import { scoreEl } from "./declarations.js";
import {
  seenQuestions,
  unseenQuestions,
} from "./start.js";
import { changeColor } from "./changeScoreColor.js";
import { buildQuestion } from "./buildQuestion.js";
import { showAnsweredQuestions } from "./showAnswers.js";
import { numberOfQuestion } from "./start.js";


// there is serious problem with the way this things is working...
// I will surely find a way for sure... 
// this is where the functionality of the remaining keys reside
// imagine how easy the code is when you have the right plans. makes sense
// this event listener has already simplified the job of the keys

// you will not appreciate modular programming unless you've done nonmodular programming.

// the importing is done once... thank you

// now this is a very big problem. how will I solve tihs like this......

// nothing much though/// I am coming...
const keys = document.querySelector("#keys"); // harnessing the power of event propagation...
let unseenQuests = unseen;
let seenQuestions = seen;
let currentQuestion = seenQuestions[0]
let score = 0;

let submitted = false
// this is where we need keys per se...

examInterface.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") toggle("prev");
  if (e.key == "p") toggle("prev");
  if (e.key == "ArrowRight") toggle("next");
  if (e.key == "n") toggle("next");
});

keys.addEventListener("click", (e) => {
  // this is where everything is going to get up and running
  // the next and prev keys you get...
    console.log(unseenQuests, seenQuestions)
  let clicked = e.target; // 

  // the logic get as e be sha....
  if (clicked.id == "next") {
    toggle("next"); // that means I should focus on toggle function
  }
  if (clicked.id == "prev") {
    toggle("prev"); // likewise this..
  }

  if (clicked.className == "numbers") {
    currentQuestion = chooseQuestion(unseenQuestions, seenQuestions, currentQuestion, "num", Number(clicked.textContent))

    questionBox.innerHTML = buildQuestion(currentQuestion); // the change will be displayed here
  }

  if (clicked.id == "submit") {
    endExam(); // period // focus on end exam function...
  }
});

// how will I be able to get the true stuff from startBtn like this... hmmm.

function toggle(cond) {
    console.log(currentQuestion, "supposed current")
    console.log(unseenQuests, "supposed unseen")
    console.log(seenQuestions, 'supposed seen')
    if (!currentQuestion.userAnswer && !submitted) { // <= erroic from here...
        // is there a way for all this things to share a global namespace
      // if user hasn't answered and submitted yet
      // choose question and update UI
      currentQuestion = updateAnswer(currentQuestion); // seems like we need to update answer before nexting
      // and update the score as well...
      score = updateScoreEl(
        score,
        numberOfQuestion,
        currentQuestion.ans,
        currentQuestion.userAnswer
      );
  
      changeColor(); // changing color for score element
      // then we can update the score too...
      currentQuestion = chooseQuestion(
        unseenQuestions,
        seenQuestions,
        currentQuestion,
        cond,
        currentQuestion.id
      );
  
      questionBox.innerHTML = buildQuestion(currentQuestion); // the change will be displayed here
      // updateKeyColor(seenQuestions)
      showAnsweredQuestions(seenQuestions); // only seen questions are show... imagine...
    } else if (currentQuestion.userAnswer || submitted) {
      // this means if question has been answered
      // choose question and update UI
      // updateAnswer(currentQuestion) // seems like we need to update answer before nexting
      chooseQuestion(cond, currentQuestion.id); // this has a side effect
      questionBox.innerHTML = buildQuestion(currentQuestion); // the change will be displayed here
      // updateKeyColor(seenQuestions)
      // perhaps this conditioning is not correct
    }
  }
  

// this is better and interesting. Thank you so much.
function updateKeyColor(questions) {
  for (let el of questions) {
    let node = document.getElementById(`num${el.id}`);
    if (el.userAnswer) {
      node.style.backgroundColor = "green";
      node.style.color = "white";
    }
  }
}

function updateScoreEl(score, totalQuestions, correctAns, userAns) {
  if (!userAns) {
    // do nothing
  } else if (userAns == correctAns) {
    score += 1;
  } else {
    // reduce user score accordingly...
    score -= 1;
  }

  scoreEl.textContent = calcScorePercent(score, totalQuestions); // cause mutation, then return a value to score

  return score;
}

function calcScorePercent(a, b) {
  return ((a / b) * 100).toFixed(2);
}

// it's not supposed to be like this sha, it should be easy...

// now everything is working properly

// maybe I need to abstract these function self

