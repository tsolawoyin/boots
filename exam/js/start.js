// this is actually nice to be honest... 
// events that happens when the start button is clicked.

startBtn.addEventListener("click", e => {
    // load client detail into UI
    choosenSubject = subject.value; // the choosen subject
    
    // mode = modeEl.value; // set the choosen mode...

    loadClientDetails()

    // if login is true, then we can proceed...
    if (isLogin && isMember) {
        // set the global questions to the needed kind of questions and updating question length... too many things to be for God's sake. hmmmm
        loadQuestionType(choosenTopic.value)
        // console.log(choosenSubject)
        // load the first question into UI
        timeInterval = setInterval(time, 1000) // start countdown
        
        // load the first question
        loadFirstQuestion()

        loadKeys(numberOfQuestion)

        loginInterface.remove() // remove login interface

        examInterface.style.display = "grid" // display exam interface...
    } else {
        window.alert("Sorry.You cannot use this software.")
    }
})

// this program is just to make my student become better. no long thing.... I don't have all these server time. honestly...
// help update the user information
function loadClientDetails () {
    userEl.textContent = username.value;
    sbjEl.textContent = subject.value
    topicEl.textContent = choosenTopic.value;
    isLogin = true
}

// now refactoring the code is sth difficult... I don't even understand...
function loadQuestionType(topic) {
    // get questions
    let questionsList;

    switch (choosenSubject) {
        case "chemistry":
            questionsList = getQuestion("chemistry");
            break;
        case "physics":
            questionsList = getQuestion("physics");
            break;
        case "biology":
            questionsList = getQuestion("biology");
            break;
        case "english":
            questionsList = getQuestion("english")
            break;
    }

    for (let q of questionsList) {
        if (topic == q.topic) {
            unseenQuestions = q.questions; // set the global question to the question
        } 
    }
}

function loadFirstQuestion() {
    chooseQuestion("initial", 0) // this sets the currentQuestion to a value
    questionBox.innerHTML = buildQuestion(currentQuestion) // this will currently display the question
}

function loadKeys (keys) {
    let keyStr = ""
    for (let i = 1; i <= keys; i++) {
        keyStr += `<p class="numbers" id="num${i}">${i}</p>`
    }
    numKeys.innerHTML = keyStr
}

// yeah. The startup engine is complete.

// makes sense sheyb? lol. yeah....

// what is the essence of loading up a server
// anyhow sha... I want to keep this simple so that I can focus on my exam and math and other things that I need...