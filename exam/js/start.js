import { chooseQuestion } from "./chooseQuestion.js";
import { buildQuestion } from "./buildQuestion.js";
import { getQuestion } from "../questionDB/local.js";
import { general } from "../questionDB/general.js";
import { choosenTopic } from "./selectTopic.js"; // that's what I am talking about. You need to reason this thing properly... else, you will just keep banging on the keyboard like a monkey...
import { isMember } from "./validateUser.js"; // now things are making sense... This will surely make me learn more about module...
import { 
  startBtn as start, // likewise this
  subject, // this is very important rn
  username,
  userEl,
  topicEl,
  sbjEl,
  numKeys,
  questionBox,
  loginInterface,
  examInterface
} from "./declarations.js"; 
// it's clear that unseenQuestion and seenQuestions pops up on the click of start


let unseenQuestions = [];
let seenQuestions = [];
let currentQuestion = null;
let numberOfQuestion = 40;

// environmental conditioning. this get as e be. lol...

// import { unseenQuestions } from "./declarations.js";
// apart from that, modules helps reason about code better. making it easy to write resuable code. now I get React philosophy..
// practicals is more important than theory.


// surely surely this cannot work...
// this is actually nice to be honest...
// events that happens when the start button is clicked.

// start engine will need serious modification.
// if it will start, we will fix the rest. trust me.

// we will therefore need to make local declarations. This is dope but frustrating. hmmm...
// let login = isLogin

start.addEventListener("click", (e) => {
  // load client detail into UI
  // mode = modeEl.value; // set the choosen mode...

  loadClientDetails(); // we need to load client's detail first...
  // loadClientDetails is ok...

  // if login is true, then we can proceed...
  if (isMember) { // isMember is gotten from another programmer. lol..
    // set the global questions to the needed kind of questions and updating question length... too many things to be for God's sake. hmmmm
    // now we can set login to true here

    // localStorage.setItem("started", true); // normally, exam has started now...
    // this started thing is not that useful unless I want to 

    loadQuestionType(subject.value, choosenTopic.value);
    // console.log(choosenSubject)
    // load the first question into UI
    // setting time
    // minutes = Number(userTime.value); // this will surely cause trouble.... 

    // timeInterval = setInterval(time, 1000); // start countdown

    // load the first question
    loadFirstQuestion();

    loadKeys(unseenQuestions.length + 1); // makes sense

    loginInterface.style.display = "none"; // remove login interface

    examInterface.style.display = "grid"; // display exam interface...
  } else {
    window.alert("Please enter a valid name.");
  }
});

// this program is just to make my student become better. no long thing.... I don't have all these server time. honestly...
// help update the user information
// I don't think loadcline should have any personal issue...
function loadClientDetails() {
  userEl.textContent = username.value; // making sense...
  sbjEl.textContent = subject.value; // 
  topicEl.textContent = choosenTopic.value;
}


// now refactoring the code is sth difficult... I don't even understand...
// what's up about unseenQueston
function loadQuestionType(subject, topic) {
  // get questions

  if (topic == "general") {
    // we return a different thing entirely...
    switch (
      subject// alright. thank you so much...
    ) {
      case "chemistry":
        unseenQuestions = general(getQuestion("chemistry"));
        break;
      case "english":
        unseenQuestions = general(getQuestion("english"));
        break;
    }
  } else {
    let questionsList;

    switch (
      subject// alright. thank you so much...
    ) {
      case "chemistry":
        questionsList = getQuestion("chemistry");
        break;
      case "physics":
        questionsList = getQuestion("physics");
        break;
      case "biology":
        questionsList = getQuestion("biology");
        break;
      case "english":
        questionsList = getQuestion("english");
        break;
    }

    for (let q of questionsList) {
      if (topic == q.topic) {
        unseenQuestions = q.questions;
      }
    }
  }
}

function loadFirstQuestion() {
  currentQuestion = chooseQuestion(unseenQuestions, seenQuestions, currentQuestion, "initial", 0); // this sets the currentQuestion to a value
  questionBox.innerHTML = buildQuestion(currentQuestion); // this will currently display the question
}

function loadKeys(keys) {
  // let me just edit this section
  let keyStr = "";

  if (keys < 40) {
    for (let i = 1; i <= keys; i++) {
      keyStr += `<p class="numbers" id="num${i}">${i}</p>`;
      numberOfQuestion = keys;
    }
  } else {
    for (let i = 1; i <= 40; i++) {
      keyStr += `<p class="numbers" id="num${i}">${i}</p>`;
      // this one is just the normal old style
      // numberofquestion is 40 by default, so I don't get...
    }
  }
  numKeys.innerHTML = keyStr; // num keys...
}

// yeah. The startup engine is complete.

// makes sense sheyb? lol. yeah....

// what is the essence of loading up a server
// anyhow sha... I want to keep this simple so that I can focus on my exam and math and other things that I need...

// this modular thing will take some to getting used to... it's terribly difficult




// I need to think of this modularly else it will and shall not work. Trust me.
export {
  unseenQuestions,
  seenQuestions,
  numberOfQuestion
}