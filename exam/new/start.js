import { addedSubjectsEl } from "./Configure/constants.js";
import { generateExam, createExam } from "./generateExam.js";
import { buildQuestion } from "./buildQuestion.js";
// writing another start up engine
import { questionEl, numKeys } from "./Configure/constants.js";
import { time } from "./time.js";

const exams = []; // the exams are alive at this point...
let timeInterval;

document.querySelector("#start").addEventListener("click", (e) => {
  // let's rumble
  // loading client details is not a problem bruv...
  // let's do what's necessary
  generateExamBtn(generateExam()); // generating exam buttons... we will need one now. // after generating exam keys, another notable start event is generating first exam

  exams.push(createFirstExam(40)); // bringing only the first question to life!
  // it works like magic this time around....
  // first exam events....
  let firstExam = exams[0];

  firstExam.nextQuestion(); // bringing the first question to life normally...

  questionEl.innerHTML = buildQuestion(firstExam.currentQuestion); // displaying question....

  numKeys.innerHTML = firstExam.loadKeys();
  // that's all for the first question stuff.
  // no marking is done yet, nothing special, just display the first question in addition to some auxiliary stuffs...
  loadClientDetails(); // loading client details...

  // we need to start time as well....
  timeInterval = setInterval(time, 1000); // start countdown
  // there are still many more stuffs to do...
  // like load keys..
});

// this way I can work with generate exam in any module... :-)

function generateExamBtn(exams) {
  if (exams) {
    const examEL = document.querySelector("#exams");

    exams.forEach((e, i) => {
      let li = document.createElement("li");
      li.textContent = e.subject;
      li.className = "btn";

      if (i == 0) {
        li.className = "btn btn-secondary";
      }

      examEL.append(li);
    });
  }
}

function createFirstExam(qty) {
  let first = generateExam();
  return createExam(first[0].subject, first[0].topic, qty);
}

function loadClientDetails() {
  userEl.textContent = username.value; // making sense...
}

// always checking for errors. o la gbara.

// generate first exam is stupid, it is a general function

export { exams };
