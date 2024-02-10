import { markQuestions } from "./markQuestions.js";
import { showAnsweredQuestions } from "./showAnswers.js";

// this function controls what happens after the exam. 
// very little stuff happen for now, we can't say for later sha. a lot might happen. :)
// I love this room, can give me enough time to study on my own without stress.
function endExam(seenQuestions, submitted, username) {
    let score = markQuestions(seenQuestions)

    score = score < 0 ? 0 : score;

    clearInterval(timeInterval) // we will solve this one later...
    
    if (!submitted) { // should only submit once. and in fact, I want to add are you sure function...
        // I don't think this one is kind of important anymore since I already display answers at runtime
        showAnsweredQuestions(seenQuestions); // update the keys depending on the whether the question is right or wrong
        // what else should be done?
        localStorage.setItem(username.value, score) // this is for people who don't want to tell us their answer...
        
        // localStorage.setItem("started", false); // once exam is over, the started should be set to false...
    
        alert(`Your score is ${score}`)
    
        submitted = true;
    }
}

// in fact, the end exam code is simply maintained here.