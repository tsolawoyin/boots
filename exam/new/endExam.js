// this function controls what happens after the exam. 
// very little stuff happen for now, we can't say for later sha. a lot might happen. :)
// I love this room, can give me enough time to study on my own without stress.
function endExam(score, submitted, timeInterval) {
    // well, all these things are previous philosophies...
    clearInterval(timeInterval)
    let totalScore = calcTotalScore(exams);
    alert(`Your overall score is ${totalScore}`);
    
    if (!submitted) { // should only submit once. and in fact, I want to add are you sure function...

        alert(`Your score is ${score}`)
        // what I am anticipating here is analysing performance...

        submitted = true;
    }
}

// I think that should solve time interval issue.. but not yet sure...

// in fact, the end exam code is simply maintained here.
// very little thing happens when exam is ended. omo...

export { endExam }