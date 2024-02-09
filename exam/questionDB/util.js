

function addInfo(questions, info) {
    // questions will be a lot of questions
    for (let q of questions) {
        q.info = info;
    }
}

addInfo(englishQuestions[3].questions, "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence.")

console.log(JSON.stringify(englishQuestions[3].questions))

