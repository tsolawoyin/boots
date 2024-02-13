import { addedSubjectsEl } from "./Configure/constants.js";
import { generateExam, createExam } from "./generateExam.js";
import { buildQuestion } from "./buildQuestion.js";
// writing another start up engine
import { questionEl, numKeys } from "./Configure/constants.js";
import { timeEl } from "./Configure/constants.js";
import { endExam } from "./endExam.js";
// interface
import { loginInterface, examInterface } from "./Configure/constants.js";
// 
import { isMember } from "./validateUser.js";

const exams = []; // the exams are alive at this point...
let timeInterval;

// time stuff =======================================
const countDownEl = document.querySelector("#time");
const minEl = document.querySelector("#min");
const secEl = document.querySelector("#sec");
let minutes = Number(timeEl.value);
let seconds = 0;
// =================================================

document.querySelector("#start").addEventListener("click", (e) => {
  // let's rumble
  // loading client details is not a problem bruv...
  // let's do what's necessary
  if (isMember) {
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
      // dealing with time...
      // the time function is the only thing left to make everything click...
      // we need to start time as well....
      minutes = Number(timeEl.value);
      timeInterval = setInterval(time, 1000); // start countdown
      // there are still many more stuffs to do...
      // like load keys..
      //   this is a very serious somethng...
      // will complete this function later
      loginInterface.remove()
      examInterface.style.display = "grid";
  } else {
    alert("Please enter a valid name")
  }

  
});

// this way I can work with generate exam in any module... :-)

function generateExamBtn(exams) {
  if (exams) {
    const examEL = document.querySelector("#exams");

    exams.forEach((e, i) => {
      let li = document.createElement("li");
      li.textContent = e.subject;
      li.className = "btn";
      li.id = `${e.subject}-${e.topic}`;

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

// we will import more stuffs here...
//time functions
function time() {
  if (seconds == 0) {
    seconds = 59;
    minutes -= 1;
  } else seconds -= 1;
  // end exam
  if (minutes < 0) {
    endExam();
  }

  // deal with displaying time
  showTIme(minutes); // simple as abc...
  // updating UI
}
// append zero to time
function appendZero(s) {
  if (s.length == 1) {
    return `0${s}`;
  } else return s;
}

function showTIme(minutes) {
  if (minutes < 10) {
    countDownEl.style.color = "crimson";
  }

  if (minutes < 0) {
    minEl.textContent = "00";
    secEl.textContent = "00";
  } else {
    minEl.textContent = appendZero(String(minutes));
    secEl.textContent = appendZero(String(seconds));
  }
}
// ================

export { exams, timeInterval };
