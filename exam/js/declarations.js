const startBtn = document.querySelector("#start");
// input value
const username = document.querySelector("#username");
const subject = document.querySelector("#subjects");
const userTime = document.querySelector("#user-time");
// const modeEl = document.querySelector("#mode")
// mode is one of ->
let mode = "practice"; // the reason why I am keeping this for now is that a significant part of the code relies on this to work...

// option keys
// const physics = document.querySelector("#phy")
const chemistry = document.querySelector("#chm");
const biology = document.querySelector("#bio");
const english = document.querySelector("#eng");

// let choosenSubject = null;
// let choosenTopic = null; // choosen topic is null at this point too...
// client information
const userEl = document.querySelector("#userEl");
const topicEl = document.querySelector("#topic");
const sbjEl = document.querySelector("#sbj");
// interfaces
const loginInterface = document.querySelector("#login-interface");
const examInterface = document.querySelector("#exam-interface");
// question information
const questionFrame = document.querySelector("#question-frame");
const questionBox = document.querySelector("#question");
const numKeys = document.querySelector("#num-keys");
// key elements
const keys = document.querySelector("#keys");
// time elements
const timeEl = document.querySelector("#time");
const minEl = document.querySelector("#min");
const secEl = document.querySelector("#sec");
// score information
const scoreUpdate = document.querySelector("#current-score");
const scoreEl = document.querySelector("#current-score");

// the ones with the const is ok... 

// the reason I am using let here that I want to change it later...
let score = 0;

let isLogin = false; // isLogin will do that stuff for us...

// submit state
let submitted = false;
// time status
let seconds = 0;
let minutes = Number(userTime.value);
let timeInterval = null;
// now that's one problem noticed... always looking for problem...
// now I understand the problem...
// question
// let unseenQuestions = null; // the questions to be done will be loaded once the user starts.
// let seenQuestions = []; // list of question that have been seen. Seen doesn't necessarily mean done anyways.
let numberOfQuestion = 40; // let the number of questions be 40. jamb style.

// exporting a lot of things that I am not even sure will still work...
export {
  startBtn,
  username,
  subject,
  userTime,
  mode,
  chemistry,
  biology,
  english,
  userEl,
  topicEl,
  sbjEl,
  loginInterface,
  examInterface,
  questionFrame,
  questionBox,
  numKeys,
  keys,
  timeEl,
  minEl,
  secEl,
  scoreUpdate,
  scoreEl,
  score,
  isLogin,
  submitted,
  seconds,
  minutes,
  timeInterval,
//   unseenQuestions,
//   seenQuestions,
//   currentQuestion,
  numberOfQuestion,
};
