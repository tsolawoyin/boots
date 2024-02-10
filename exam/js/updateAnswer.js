
// now getting answers. 
// this is a straight forward problem.

// we get the current answer chosen by the user and update it accordingly...
// lol, the function is extremely easy using object. 
// current question is just a question, I mean not list not questions or whatever, just a question, lobatan...
function updateAnswer(currentQuestion) {
    // the only thing we need is the current question
    let id = currentQuestion.id
    // getting the answer of the list elements
    let answerList = document.getElementsByName(`Q${id}`);
    // searching through the list to see which one is checked...
    for (let ans of answerList) {
        if (ans.checked) {
            currentQuestion.userAnswer = ans.value;
        }
    }
} 

export { updateAnswer } // this is also dope. no hardcoding stuff..
// this is not easy to test as we need UI elements to do proper testing. Thanks