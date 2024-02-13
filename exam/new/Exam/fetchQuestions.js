// ListOfQuestions Natural[1,inf] -> ListOfQuestions
// given a list of questions and a number returns number random questions in a list...
// import { chemistryQuestions } from "../questionDB/chmQuestions.js";
// this importation helps me focus my mind... and see things clearly....

// example
// given a list of 100 questions and quantity is 30, the getQuestions function will produce a list of 30 random questions

function fetchQuestions(subject, topic, quantity) {
    // now topic can be anything including general
    if (topic == "general") {
        return general(subject, quantity);
    } else {
        return getQuestions(findTopic(subject, topic), quantity); // finding topic before getting questions
    }
}

// the way it is splitted up makes the code understandable anyways...
function getQuestions({topic, questions}, quantity) {
  const choosenQuestions = [];
  const ids = [];

  // it's a little bit of work too though... we don't want to pick the same question twice...
  if (questions.length <= quantity) {
    // not need to waste time on iterating anything
    return questions; // just return questions
  } else {
    while (choosenQuestions.length < quantity) {
      // not for loop iteration abi what am I writing sef
      let choice = choose(questions);

      if (!ids.includes(choice.id)) {
        choice.topic = topic
        choosenQuestions.push(choice);
        ids.push(choice.id);
      }
    }
  }
  return choosenQuestions;
}

// I think it makes sense to put the general question here as well
// the general function is very much like getQuestions, but it chooses random questions from different topics.
function general(subject, quantity) {
  // questions have the structure of list with many questions in it...
  // but first, let's settle this stuff
  const choosenQuestions = []; // empty for a start. we are going to do some serious drilling...

  let ids = []; //

  // to prevent infinite loop stuff, you know
  let count = 0;

  while (choosenQuestions.length < quantity) {
    // let's just keep picking questions
    if (count >= 100) break;

    let { topic, questions } = choose(subject); // this will choose one topic for us...

    let question = choose(questions); // this will choose the question for us

    // now check if id is not already choosen to avoid choosing the same question twice...
    if (!ids.includes(question.id)) {
      // console.log(question.id)
      choosenQuestions.push(question); // push in question. shey you get...

      ids.push(question.id);
      // console.log(ids)
      // attach the topic title to the question
      question.topic = topic;
    }

    count++; // this is just to prevent infinite loop sort of thing.
     // for analysis purposes, I think this general function should add more information to the question choosen...
  }
  // that is pretty much everything we need anyways.
  return choosenQuestions;
}

// helpers
function choose(questions) {
  return questions[Math.floor(Math.random() * questions.length)];
}

function findTopic(subject, topic) {
    for (let s of subject) {
        if (s.topic == topic) {
            return s
        }
    }
}

// console.log(getQuestions(q, 100)); // requested qty is more than questions
// console.log(getQuestions(q, 50)); // requested qty is less than questions
// console.log(getQuestions(q, 56)); // requested qty is equal to questions
// console.log(general(chemistryQuestions, 10));
// console.log(fetchQuestions(chemistryQuestions, "Ionic bonding", 10))

export { fetchQuestions, choose };

