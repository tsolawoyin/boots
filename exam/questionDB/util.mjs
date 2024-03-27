

// function addInfo(questions, info) {
//     // questions will be a lot of questions
//     for (let q of questions) {
//         q.info = info;
//     }
// }

// addInfo(englishQuestions[3].questions, "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence.")

// console.log(JSON.stringify(englishQuestions[3].questions))
function assignId(questions) {
    // changing the id...
    for (let i = 0; i < questions.length; i++) {
        // working on stuffs...
        questions[i].id = i + 1;
    }

    console.log(JSON.stringify(questions));
}


import { englishQuestions } from "./engQuestions.js";
import { chemistryQuestions } from "./chmQuestions.js";
import { biologyQuestions } from "./bioQuestions.js";

// assignId(englishQuestions[3].questions)
// 
function checkForDuplicate(question) {
    // given a list of questions, return true if there is a duplicate and false if there isn't
    let listOfQuestion = question.questions
    let ids = new Array();

    for (let l of listOfQuestion) {
        ids.push(l.id);
    }

    let newId = [...new Set(ids)];

    for (let [a,i] of ids.entries()) {
        console.log(`${i} => ${newId[a]} ${i !== newId[a] ? "=> hi" : ""}`);
    }

    console.log(question.topic)

    return ids.length !== newId.length
}

// console.log(checkForDuplicate(chemistryQuestions[17]))
