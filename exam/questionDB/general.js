
// generate 40 random questions

function general(subject) {
    // questions have the structure of list with many questions in it...
    // but first, let's settle this stuff
    let questions = [] // empty for a start. we are going to do some serious drilling...

    let ids = [] // 

    while (questions.length < 40) {
        // let's just keep picking questions
        let topic = choose(subject); // this will choose one topic for us...
        let question = choose(topic.questions) // this will choose the question for us
        // now check if id is not already choosen to avoid choosing the same question twice...
        if (!ids.includes(questions.id)) {
            questions.push(question); // push in question. shey you get...
            ids.push(question.id)
        }
    }

    // that is pretty much everything we need anyways. 
    return questions
}

function choose(questions) {
    return questions[Math.floor(Math.random() * questions.length)];
}

// console.log(general(chemistryQuestions))