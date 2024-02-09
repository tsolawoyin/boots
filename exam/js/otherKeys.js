// this is where the functionality of the remaining keys reside
// imagine how easy the code is when you have the right plans. makes sense
// this event listener has already simplified the job of the keys

examInterface.addEventListener("keydown", e => {
    if (e.key == "ArrowLeft") toggle("prev");
    if (e.key == "p") toggle("prev");
    if (e.key == "ArrowRight") toggle("next");
    if (e.key == "n") toggle("next");

})

keys.addEventListener("click", e => {
    // this is where everything is going to get up and running
    // the next and prev keys you get...

    let clicked = e.target;

    // the logic get as e be sha....
    if (mode == "practice") {
        if (clicked.id == "next") {
            toggle("next")
        };
        if (clicked.id == "prev") {
            toggle("prev")
        };
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

// maybe I need to abstract these function self


function toggle(cond) {
    if (!currentQuestion.userAnswer && !submitted) {
        // if user hasn't answered and submitted yet
        // choose question and update UI
        updateAnswer(currentQuestion) // seems like we need to update answer before nexting
        // and update the score as well...
        score = updateScoreEl(score, numberOfQuestion, currentQuestion.ans, currentQuestion.userAnswer)

        changeColor() // changing color for score element
        // then we can update the score too...
        chooseQuestion(cond, currentQuestion.id) // this has a side effect

        questionBox.innerHTML = buildQuestion(currentQuestion) // the change will be displayed here
        // updateKeyColor(seenQuestions)
        showAnsweredQuestions(seenQuestions); // only seen questions are show... imagine...
        
    } else if (currentQuestion.userAnswer || submitted) { // this means if question has been answered
        // choose question and update UI
        // updateAnswer(currentQuestion) // seems like we need to update answer before nexting
        chooseQuestion(cond, currentQuestion.id) // this has a side effect
        questionBox.innerHTML = buildQuestion(currentQuestion) // the change will be displayed here
        // updateKeyColor(seenQuestions)
        // perhaps this conditioning is not correct
    }
}