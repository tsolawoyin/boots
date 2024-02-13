// imagine how the function is simplified when you know what you are supposed to do already.
// question already seen but haven't answered
// modularizing the code is better. I will work hard to refactor it.
let sampleQuestion1 = {
  id: 1,
  question:
    "Nitrogen is a non-metal which is found in what group of the periodic table?",
  options: ["I", "II", "III", "VI", "V"],
  answer: "E",
  userAnswer: null,
};
// question already answered
let sampleQuestion2 = {
  id: 5,
  question:
    "Nitrogen is a non-metal which is found in what group of the periodic table?",
  options: ["I", "II", "III", "VI", "V"],
  answer: "E",
  userAnswer: "B",
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
  answer: "D",
  userAnswer: null,
};

// console.log(buildQuestion(sampleQuestion1))
// console.log(buildQuestion(sampleQuestion2))
// console.log(buildQuestion(sampleQuestion3))

// Question -> build question
function buildQuestion(question) {
  // append info if present then continue rendering
  return `${
    question?.info ? 
    `<p class='question-info'>${question.info}</p>` : ""
  }<p class="question-text">${question.id}. ${
    question.question
  }</p>${generateOptions(
    question.id,
    question.options,
    question.userAnswer,
    question.remark
  )}`;
}

function generateOptions(id, options, answer, remark) {
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
    if (optionVal[i] == answer) {
      // if question has already be answered
      structure += `<input type="radio" name="Q${id}" id="q${id}${optionVal[i]}" value="${optionVal[i]}" checked>
            <label for="q${id}${optionVal[i]}" class="answers"> ${options[i]}</label><br />`;
    } else {
      structure += `<input type="radio" name="Q${id}" id="q${id}${optionVal[i]}" value="${optionVal[i]}">
            <label for="q${id}${optionVal[i]}" class="answers"> ${options[i]}</label><br />`;
    }
  }

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
