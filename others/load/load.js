const questionId = document.querySelector("#questionid");
const question = document.querySelector("#question");
const option = document.querySelector("#options");
const main = document.querySelector("#main-word");
const answer = document.querySelector("#answer");
const createBtn = document.querySelector("#push");
const showBtn = document.querySelector("#show");

function split(opt) {
  return opt.split("/");
}

class Question {
  constructor(id, question, options, ans, main) {
    this.id = id;
    (this.question = question), (this.options = split(options));
    (this.ans = ans), (this.main = main), (this.remark = "");
  }
}

// that's pretty much everything we need...

let questions = new Array();

createBtn.addEventListener("click", (e) => {
  if (question.value != "") {
    questions.push(
      new Question(
        Number(questionId.value),
        question.value,
        option.value,
        answer.value,
        main.value
      )
    );
    localStorage.setItem("questions", JSON.stringify(questions)); //for extra assurance...
    question.value = "";
    option.value = "";
    main.value = "";
    answer.value = "";

    updateLog();
  } else {
    alert("Invalid process");
  }
});

showBtn.addEventListener("click", (e) => {
  let Q = JSON.stringify(questions);
  console.log(Q);
  console.log(JSON.stringify(oldIds));
});

// localStorage.
console.log(localStorage.getItem("questions"));

// function assignRandomId (oldIds) {
//     let char = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//     // this should be enough joh...
//     let id = "";

//     do {
//         for (let i = 0; i < 4; i++) {
//             id += chooseRandomChar(char); // this is sure to get id a four random char....
//         }
//     } while (oldIds.includes(id));

//     oldIds.push(id);

//     return id;
// }

// function chooseRandomChar(char) {
//   return char[Math.floor(Math.random() * char.length)];
// }

const qId = document.querySelector("#qid");
const questionEL = document.querySelector("#question2");
const options = document.querySelector("#options2");
const mainEl = document.querySelector("#main");
// this will greatly amplify my work...
function updateLog() {
  let last = questions[questions.length - 1]; // guarantee to always choose the last one

  qId.textContent = last.id;
  questionEL.textContent = last.question;
  options.textContent = last.options;
  mainEl.textContent = last.main;
}
