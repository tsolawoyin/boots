// to prevent having all the questions loaded on load, I will parse all the questions and send to local storage

// I will just have to modify the code a bit

function setQuestion (q, qObj) {
    localStorage.setItem(q, JSON.stringify(qObj))
}
// this will return the object as it is stored for us
function getQuestion (q) {
    return JSON.parse(localStorage.getItem(q))
}

// I will just turn on the ones I need that's all...

setQuestion("chemistry", chemistryQuestions)
setQuestion("english", englishQuestions)
// setQuestion("physics", physicsQuestions)
// setQuestion("biology", biologyQuestions)