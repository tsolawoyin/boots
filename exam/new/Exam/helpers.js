// function description to be written later...
const mainWord = (word, statement) => {
  // let's think of how to make this work...
  let posn = statement.search(word);

  if (posn != -1) {
    let fPart = statement.slice(0, posn);
    let sPart = statement.slice(posn + word.length);
    return `${fPart}<span class="main-word"><em>${word}</em></span>${sPart}`;
  } else {
    return statement;
  }
};
// function description later...
// returns true if a particular question is present in a listOfQuestions
function isPresent(id, questions) {
  for (let i of questions) {
    if (id == i.id) return true;
  }
  return false;
}
// helps remove a particular question from a list of questions
function removeQuestion(choice, list) {
  let newArr = [];
  for (let i of list) {
    if (choice.id == i.id) continue;
    else newArr.push(i);
  }
  return newArr;
}
// helps return the question with the id given from the list of questions given
function fetchQuestion(id, questions) {
  for (let i of questions) {
    if (i.id == id) return i;
  }
}

export { mainWord, isPresent, removeQuestion, fetchQuestion };
