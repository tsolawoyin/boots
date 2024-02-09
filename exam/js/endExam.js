function endExam() {
    let score = markQuestions(seenQuestions)

    score = score < 0 ? 0 : score;

    clearInterval(timeInterval)
    

    if (!submitted && mode == "practice") {
        // we will display the answers...
        showAnsweredQuestions(seenQuestions); // update the keys depending on the whether the question is right or wrong
        // what else should be done?
        localStorage.setItem(username.value, score) // this is for people who don't want to tell us their answer...
        
        // localStorage.setItem("started", false); // once exam is over, the started should be set to false...

        alert(`Your score is ${score}`)

        submitted = true;

    } else if (!submitted) {
    
        localStorage.setItem(username.value, score) // this will help write result in local storage, at least for now.
    
        questionFrame.innerHTML = `<h1>Exam ended. Thank you for taking the exam.<h1>`
    }

    // submitted = true
}

// in fact, the end exam code is simply maintained here.