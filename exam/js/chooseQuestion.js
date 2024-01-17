
// condition currentId
// the function has three side effects
// 1. it updates the current question
// 2. it pushes the chosen question into the seenQuestion
// 3. it removes the chosen question from the unseenQuestion



// condition is one of:
// - prev
// - next
// - initial
// - num-key

// currentId is the id of the currentQuestion

// where prev key goes back to a question 1 less than the current question
// next key have two behaviours
//    1. if the next question (i.e current question.id + 1) is already seen, we simply go to the next question by calling the fetchQuestion, which performs a quick run through the list
//    2. if the question does not exist in the seen questions, then we choose a new question at random and push to seen
// if initial, i.e load first question, then we just choose a new question at random
// if num-key, somewhat like next but a little more work. that's all...

// let's do some little testings
// little testing ke, abi serious testing...
// main function...
function chooseQuestion (condition, currentId) {

    if (condition == "initial") {
        // choosing question at random
        let choice = randomQuestion(unseenQuestions);   
        // updating unseenQuestions
        unseenQuestions = removeQuestion(choice, unseenQuestions);
        // repackaging selected question
        repackaged(choice, "initial", currentId);
        // push seen question into seenQuestions
        seenQuestions.push(choice);
        // then update current question to match the selected question. makes sense
        currentQuestion = choice; // makes sense? yeah. // this is still far more important
    }

    if (condition == "next") {
        if (currentId + 1 <= numberOfQuestion) { // temporary solution...
            if (isPresent(currentId + 1, seenQuestions)) {
                // the next question has already been seen, so just set currentQuestion to the question
                currentQuestion = fetchQuestion(currentId + 1, seenQuestions) // go and bring the question for us... // that is all. 
                // I think this is where the problem lies... 
            } else {
                // we just do a new thing here...
                let choice = randomQuestion(unseenQuestions) // choose a random question asap...
                // in case there is no more questions left
                if (choice) {
                    // update unseen questions first
                    unseenQuestions = removeQuestion(choice, unseenQuestions);
                    // then repackage
                    repackaged(choice, "next", currentId)
                    // then push
                    seenQuestions.push(choice);
                    // then update
                    currentQuestion = choice;
                }
            }
        }
    }
    if (condition == "prev") {
        // using the prev key is pretty straight forward, you only prev to things you have seen before... shey you get
        // but we don't want to prev if the id of the current question is 1; there is nothing to prev to.
        // now prev is a lot of work too. I made a silly argument up here. 
        // lol. getting this function right will greatly simply my code because this is the most important part, so no lazying around
        // this is if question has already been seen before. honestly some user might jump and still want to prev, lol. it;s just a normal thing. no long thing shey you get...
        // now I understand...
        if (currentId - 1 >= 1) {
            if (isPresent(currentId - 1, seenQuestions)) { 
                // no matter the number, it makes sense
                let current = fetchQuestion(currentId - 1, seenQuestions); // this one works with seen
                // it is really easy shey you get to do these things...
                // is there any need to repackage what has been seen already? nope nope
                currentQuestion = current; // that is pretty much all the thing we need here... 
            } else {
                // then let's do the usual thing, just take any random question and display it as the prev
                // we just do a new thing here...
                let choice = randomQuestion(unseenQuestions) // choose a random question asap...
                // in case there is no more questions left
                if (choice) {
                    // update unseen questions first
                    unseenQuestions = removeQuestion(choice, unseenQuestions);
                    // then repackage
                    repackaged(choice, "prev", currentId)
                    // then push
                    seenQuestions.push(choice);
                    // then update
                    currentQuestion = choice;
                }
            }
        } 
    }
    if (condition == "num") {
        // this is very simple too.. Now everything is just cool and easy. Imagine. 
        if (isPresent(currentId, seenQuestions)) {
            currentQuestion = fetchQuestion(currentId, seenQuestions) // normal thing... // just updated current question to the old one
        } else {
            // we just do the normal thing...
            // the most critical lesson here is just to let go of your own emotions, and never pass your aggression to the outside. And don't talk about the things you hate... overtime, it will dissipate. and it is very clear now. even if the emotion comes, bear it, don't worry. It will disappear.
            // it is just a matter of time... 
            // one things.
            let choice = randomQuestion(unseenQuestions);

            unseenQuestions = removeQuestion(choice, unseenQuestions); // how far, makes sense. yupyup...
            // repackage
            repackaged(choice, "num", currentId);
            // then push to seen
            seenQuestions.push(choice);
            // update current question
            currentQuestion = choice;
        }
        
    }
}

// that is all. no long thing. O ti tan beyen...

function randomQuestion(questions) {
    return questions[Math.floor(Math.random() * questions.length)]
}
// cond is one of initial, next, prev, and num
// oldId is the id of the currentQUESTION
// choice is the currentQuestion choosen
function repackaged(choice, cond, oldId) {
    // the userAnswer is supposed to check for old answers shey you get...
    // let's repackaged everything here joh...
    // english repacking,, please no vex sha oo... please. thanks
    if (choice.main) {
        choice.question = mainWord(choice.main, choice.question)
    }

    if (cond == "initial") {
        choice.id = 1; // since it is initial, it is natural for its id to be 1;
        choice.userAnswer = null; // since it hasn't been answered yet. makes sense?
    }

    if (cond == "next") {
        choice.id = oldId + 1; // this is where Id is assigned, I don't see any reason for id in the object buildup
        choice.userAnswer = null;
    }
    
    if (cond == "prev") {
        choice.id = oldId - 1;
        choice.userAnswer = null; 
    }

    if (cond == "num") {
        choice.id = oldId;
        choice.userAnswer = null;
    }
}

// removing choice from list
function removeQuestion (choice, list) {
    let newArr = []
    for (let i of list) {
        if (choice.id == i.id) continue;
        else newArr.push(i) 
    }
    return newArr
}
// helps go bring question from seenQuestion
// id is questionId and questions is seenQuestions
function fetchQuestion(id, questions) {
    for (let i of questions) {
        if (i.id == id) return i
    }
}
// checking if question is present in seenQuestions
function isPresent(id, questions) {
    for (let i of questions) {
        if (id == i.id) return true
    }
    return false;
}

// that's all.

// test for initial is passed alright
// chooseQuestion("initial", 0) // for initial state, id must be zero 
// console.log(currentQuestion)
// console.log(unseenQuestions)
// console.log(seenQuestions)
// test for next 
// chooseQuestion("next", 53) // our current current question has id of 2
// console.log(currentQuestion)
// console.log(unseenQuestions)
// chooseQuestion("initial", 0) // loaded
// // console.log(currentQuestion)
// // console.log(unseenQuestions)
// // console.log(seenQuestions)
// chooseQuestion("next", 1) // next
// // console.log(currentQuestion)
// // console.log(unseenQuestions)
// // console.log(seenQuestions)
// chooseQuestion("next", 2) // next
// // console.log(currentQuestion)
// // console.log(unseenQuestions)
// // console.log(seenQuestions)
// chooseQuestion("next", 3) // next
// // console.log(currentQuestion)
// // console.log(unseenQuestions)
// // console.log(seenQuestions)
// chooseQuestion("next", 4) // next
// // console.log(currentQuestion)
// // console.log(seenQuestions)
// // console.log(unseenQuestions)
// // console.log(currentQuestion)
// // console.log(unseenQuestions)
// chooseQuestion("prev", 5)
// chooseQuestion("prev", 4)
// chooseQuestion("prev", 3)
// chooseQuestion("prev", 2)
// chooseQuestion("prev", 1)
// // console.log(currentQuestion)
// // console.log(seenQuestions)
// // makes sense. works perfectly.. now let's jump
// chooseQuestion("num", 32)
// console.log(currentQuestion)
// chooseQuestion("prev", 32)
// console.log(currentQuestion)


// now let's simulate an exam
// chooseQuestion("initial", 0)
// console.log(currentQuestion)
// chooseQuestion("prev", 1) // this is supposed to stay at 1 and not 2
// console.log(currentQuestion)
// chooseQuestion("next", 1)
// console.log(currentQuestion)
// chooseQuestion("next", 2)
// console.log(currentQuestion)
// chooseQuestion("next", 3)
// console.log(currentQuestion)
// chooseQuestion("next", 4)
// console.log(currentQuestion)
// chooseQuestion("next", 5)
// console.log(currentQuestion)
// chooseQuestion("next", 6)
// console.log(currentQuestion)
// chooseQuestion("next", 7)
// console.log(currentQuestion)
// chooseQuestion("prev", 8)
// console.log(currentQuestion)
// chooseQuestion("prev", 7)
// console.log(currentQuestion)
// chooseQuestion("prev", 6)
// console.log(currentQuestion)
// chooseQuestion("num", 30)
// console.log(currentQuestion)
// chooseQuestion("prev", 30)
// console.log(currentQuestion)
// chooseQuestion("num", 8)
// console.log(currentQuestion)
// chooseQuestion("num", 1)
// console.log(currentQuestion)
// chooseQuestion("prev", 1)
// console.log(currentQuestion)
// chooseQuestion("next", 1)
// console.log(currentQuestion)
// chooseQuestion("num", 50)
// console.log(currentQuestion)
// chooseQuestion("next", 50)
// console.log(currentQuestion)
// chooseQuestion("prev", 50)
// console.log(currentQuestion)
// chooseQuestion("num", 30)
// console.log(currentQuestion)

// // console.log(unseenQuestions)
// // console.log(seenQuestions)

// the testing went far. I mean really far. it works...
// logical reasoning. That's why you are a programmer my nigga...