// this is where the functionality of the remaining keys reside
// imagine how easy the code is when you have the right plans. makes sense
// this event listener has already simplified the job of the keys

keys.addEventListener("click", e => {
    // this is where everything is going to get up and running
    // the next and prev keys you get...

    let clicked = e.target;

    // the logic get as e be sha....
    if (mode == "practice") {
        if (clicked.id == "next" && !currentQuestion.userAnswer && !submitted) {
            // choose question and update UI
            updateAnswer(currentQuestion) // seems like we need to update answer before nexting
            // and update the score as well...
            score = updateScoreEl(score, numberOfQuestion, currentQuestion.ans, currentQuestion.userAnswer)
            changeColor() // changing color for score element
            // then we can update the score too...
            chooseQuestion("next", currentQuestion.id) // this has a side effect
    
            questionBox.innerHTML = buildQuestion(currentQuestion) // the change will be displayed here
            // updateKeyColor(seenQuestions)
            showAnsweredQuestions(seenQuestions);
            
        }
        if (clicked.id == "next" && (currentQuestion.userAnswer || submitted)) {
            // choose question and update UI
            // updateAnswer(currentQuestion) // seems like we need to update answer before nexting
            chooseQuestion("next", currentQuestion.id) // this has a side effect
            questionBox.innerHTML = buildQuestion(currentQuestion) // the change will be displayed here
            // updateKeyColor(seenQuestions)
        }
    
        if (clicked.id == "prev" && !currentQuestion.userAnswer && !submitted) {
            // choose question and update UI
            updateAnswer(currentQuestion) // seems like we need to update answer before nexting
            // and update the score as well...
            score = updateScoreEl(score, numberOfQuestion, currentQuestion.ans, currentQuestion.userAnswer)
            changeColor() // changing color for score element
            // then choose prev question
            chooseQuestion("prev", currentQuestion.id) // this has a side effect
            questionBox.innerHTML = buildQuestion(currentQuestion) // the change will be displayed here
            // updateKeyColor(seenQuestions)
            showAnsweredQuestions(seenQuestions);
        }
        if (clicked.id == "prev" && (currentQuestion.userAnswer || submitted)) {
            // updateAnswer(currentQuestion)
            chooseQuestion("prev", currentQuestion.id) // this has a side effect
    
            questionBox.innerHTML = buildQuestion(currentQuestion) // the change will be displayed here
            // updateKeyColor(seenQuestions)
        }
    } else {
        if (clicked.id == "next" && !submitted) {
            // choose question and update UI
            updateAnswer(currentQuestion) // seems like we need to update answer before nexting

            chooseQuestion("next", currentQuestion.id) // this has a side effect
    
            questionBox.innerHTML = buildQuestion(currentQuestion) // the change will be displayed here
            updateKeyColor(seenQuestions)

        }
        if (clicked.id == "next" && submitted)  {
            // choose question and update UI
            // updateAnswer(currentQuestion) // seems like we need to update answer before nexting
            chooseQuestion("next", currentQuestion.id) // this has a side effect
            questionBox.innerHTML = buildQuestion(currentQuestion) // the change will be displayed here
            // updateKeyColor(seenQuestions)
        }
    
        if (clicked.id == "prev" && !submitted) {
            // choose question and update UI
            updateAnswer(currentQuestion) // seems like we need to update answer before nexting
            // and update the score as well...
            // then choose prev question
            chooseQuestion("prev", currentQuestion.id) // this has a side effect

            questionBox.innerHTML = buildQuestion(currentQuestion) // the change will be displayed here
            
            updateKeyColor(seenQuestions)
        }
        if (clicked.id == "prev" && submitted) {
            // updateAnswer(currentQuestion)
            chooseQuestion("prev", currentQuestion.id) // this has a side effect
    
            questionBox.innerHTML = buildQuestion(currentQuestion) // the change will be displayed here
            // updateKeyColor(seenQuestions)
        }
    }

    if (clicked.className == "numbers") {
        chooseQuestion("num", Number(clicked.textContent)) // this has a side effect
        questionBox.innerHTML = buildQuestion(currentQuestion) // the change will be displayed here
    }

    if (clicked.id == "submit") {
        endExam() // period
    }

})

// this is better and interesting. Thank you so much.
function updateKeyColor(questions) {
    for (let el of questions ) {
        let node = document.getElementById(`num${el.id}`)
        if (el.userAnswer) {
            node.style.backgroundColor = "green";
            node.style.color = 'white'
        }
    }
}

function updateScoreEl(score, totalQuestions, correctAns, userAns) {
    if (!userAns) {
        // do nothing
    } else if (userAns == correctAns) {
        score += 1
    } else {
        // reduce user score accordingly...
        score -= 1
    }

    scoreEl.textContent = calcScorePercent(score, totalQuestions);

    return score
}

function calcScorePercent(a,b) {
    return ((a/b) * 100).toFixed(2);
}


// it's not supposed to be like this sha, it should be easy...

// now everything is working properly


