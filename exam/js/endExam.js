function endExam() {
    let score = markQuestions(seenQuestions)

    score = score < 0 ? 0 : score;

    clearInterval(timeInterval)
    

    if (!submitted && mode == "practice") {
        // we will display the answers...
        showAnsweredQuestions(seenQuestions); // update the keys depending on the whether the question is right or wrong
        // what else should be done?
        localStorage.setItem(username.value, score) // this is for people who don't want to tell us their answer...

        alert(`Your score is ${score}`)

        // isLogin = false; // since the exam is finished, isLogin should be false obviously...
        // for now you will remain false for ever

        // reset time to default
        seconds = 0;
        minutes = defaultTime;
        // and updating UI time back to default as well
        // console.log(defaultTime)
        // maybe this is not the best place to show the time...
        submitted = true;

        // update time UI should be another function on it's own as it seems...

    } else if (!submitted) {
    
        localStorage.setItem(username.value, score) // this will help write result in local storage, at least for now.
    
        questionFrame.innerHTML = `<h1>Exam ended. Thank you for taking the exam.<h1>`
    }

    submitted = true
}

// in fact, the end exam code is simply maintained here.