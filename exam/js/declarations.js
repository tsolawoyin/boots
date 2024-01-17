
const startBtn = document.querySelector("#start");
// input value
const username = document.querySelector("#username")
const subject = document.querySelector("#subjects")
// const modeEl = document.querySelector("#mode")
// mode is one of -> 
let mode = "practice"; 

// option keys
// const physics = document.querySelector("#phy")
const chemistry = document.querySelector("#chm")
const biology= document.querySelector("#bio")
const english = document.querySelector("#eng")
let choosenSubject = null;
let choosenTopic = null; // choosen topic is null at this point too...
// client information
const userEl = document.querySelector("#userEl")
const topicEl = document.querySelector("#topic")
// const attemptEl = document.querySelector("#attempt")
// const prevScoreEl =document.querySelector("#prev-score")
const sbjEl = document.querySelector("#sbj")
// interfaces
const loginInterface = document.querySelector("#login-interface")
const examInterface = document.querySelector("#exam-interface")
// question information
const questionFrame = document.querySelector("#question-frame")
const questionBox = document.querySelector("#question")
const numKeys = document.querySelector("#num-keys")
// key elements
const keys = document.querySelector("#keys")
// time elements
const timeEl = document.querySelector("#time")
const minEl = document.querySelector("#min")
const secEl = document.querySelector("#sec")
// score information
const scoreUpdate = document.querySelector("#current-score")
const scoreEl = document.querySelector("#current-score")
let score = 0;

let isRuleViewed = false
let isLogin = false
// submit state
let submitted = false;
// time status
let seconds = 0
let minutes = 25
let timeInterval = null
// question
let unseenQuestions = null; // the questions to be done will be loaded once the user starts.
let seenQuestions = [] // list of question that have been seen. Seen doesn't necessarily mean done anyways.
let currentQuestion = null; // no question yet
let numberOfQuestion = 40; // let the number of questions be 40. jamb style.


