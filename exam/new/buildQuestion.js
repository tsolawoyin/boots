// imagine how the function is simplified when you know what you are supposed to do already.
// question already seen but haven't answered
// modularizing the code is better. I will work hard to refactor it.
let sampleQuestion1 = {
  id: 1,
  question:
    "Nitrogen is a non-metal which is found in what group of the periodic table?",
  options: ["I", "II", "III", "VI", "V"],
  ans: "E",
  userAnswer: null,
};
// question already answered
let sampleQuestion2 = {
  id: 5,
  question:
    "Nitrogen is a non-metal which is found in what group of the periodic table?",
  options: ["I", "II", "III", "VI", "V"],
  ans: "E",
  userAnswer: "E",
};

let sampleQuestion3 = {
  id: 3,
  question: "Nitrogen is used for the following except",
  options: [
    "in the production of ammonia gas",
    "it is used as a refrigerant",
    "for prevention of fire",
    "in the manufacture of CO<sub>2</sub>",
  ],
  ans: "D",
  userAnswer: null,
};

// console.log(buildQuestion(sampleQuestion1));
console.log(buildQuestion(sampleQuestion2))
// console.log(buildQuestion(sampleQuestion3))

// Question -> build question
function buildQuestion(question) {
  // append info if present then continue rendering
  // this is just a very short way of writing a very long stuff. lolzzzz.
  if (!question.ans) { // this is two create an ans property in case the question object is not having question.ans property. Everything is something of case.
    question["ans"] = question.answer;   
  }

  return `${
    question?.info // don't forget to check for undefined back here.
      ? `<p class='question-info'>${question.info}</p>`
      : ""
  }<p class="question-text">${question.id}. ${
    question.question
  }</p>${generateOptions(
    question.id,
    question.options,
    question.userAnswer,
    question.ans,
    question.remark
  )}`;
}

function generateOptions(id, options, answer, mainAns, remark) {
  // GENERATING OPTIONS
  let optionVal = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
  };

  let structure = `<div id="options">`;

  for (let i = 0; i < options.length; i++) {
    // now let's think about this thing properly...
    // there are many possible stuffs,
    if (!answer) {
      // that is user don't have an answer yet, do this
      structure += `<input type="radio" name="Q${id}" id="q${id}${optionVal[i]}" value="${optionVal[i]}">
        <label for="q${id}${optionVal[i]}" class="answers"> ${options[i]}</label><br />`;
    } else {
      if (optionVal[i] == answer && optionVal[i] == mainAns) { // checking only just one, shey you get...
        structure += `<input type="radio" name="Q${id}" id="q${id}${optionVal[i]}" value="${optionVal[i]}" checked>
        <label for="q${id}${optionVal[i]}" class="answers"> ${options[i]} ✅</label><br />`;
      } else {
        if (optionVal[i] == answer) {
          structure += `<input type="radio" name="Q${id}" id="q${id}${optionVal[i]}" value="${optionVal[i]}" checked>
        <label for="q${id}${optionVal[i]}" class="answers"> ${options[i]} ❌</label><br />`;
        }

        if (optionVal[i] == mainAns) {
          structure += `<input type="radio" name="Q${id}" id="q${id}${optionVal[i]}" value="${optionVal[i]}">
        <label for="q${id}${optionVal[i]}" class="answers"> ${options[i]} ✅</label><br />`;
        }

        if (optionVal[i] !== answer && optionVal[i] !== mainAns) {
          structure += `<input type="radio" name="Q${id}" id="q${id}${optionVal[i]}" value="${optionVal[i]}">
        <label for="q${id}${optionVal[i]}" class="answers"> ${options[i]}</label><br />`;
        }
      }
    }
  }

  // this is great
  // one gats reason this stuff properly...

  // adding remark if there is one before leaving
  // I thought it would be a big deal honestly...
  if (answer && remark) {
    structure += `<div class="remark">${remark}</div>`;
  }

  structure += "</div>";

  return structure; // it is returning a question string... makes sense
}

// inserting info to the top of question
// the build function doesn't need any external module....

export { buildQuestion };

// this function is very much ok. like very much ok...
// this is where the code...

// if question has already be answered
// if user answered too....
// if (optionVal[i] == answer) { // this is just checking if checked
//   structure += `<input type="radio" name="Q${id}" id="q${id}${optionVal[i]}" value="${optionVal[i]}" checked>
//         <label for="q${id}${optionVal[i]}" class="answers"> ${options[i]}</label><br />`;
// } else {
//   structure += `<input type="radio" name="Q${id}" id="q${id}${optionVal[i]}" value="${optionVal[i]}">
//         <label for="q${id}${optionVal[i]}" class="answers"> ${options[i]}</label><br />`;
// }
