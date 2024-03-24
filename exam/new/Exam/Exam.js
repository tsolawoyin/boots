import { fetchQuestions, choose } from "./fetchQuestions.js";
import { repackage } from "./repackage.js";
import { isPresent, removeQuestion, fetchQuestion } from "./helpers.js";
// the name of the user doing the exam is another thing...

// Subject: String (describing subject type)
// Topic: String (describing topic)
// Questions: Array: listOfQuestionObjects
// Quantity: Number (amount of questions users want to answer)
class Exam {
  constructor(subject, topic, questions, quantity) {
    // subject and topic will be choosen before exam...
    this.subject = subject;
    this.topic = topic;
    this.currentQuestion = null;
    this.unseenQuestions = fetchQuestions(questions, topic, quantity);
    this.quantity = this.unseenQuestions.length; // the number of questions user is taking // unseen questions changes overtime. this is utterly unreasonable to some degree
    this.seenQuestions = []; // the start btn will take another shape. that is not a problem...
    // but I think I can have many other helper functions outside here normally now... yes..
    this.score = 0;
  }

  nextQuestion() {
    // but this is obviously important
    if (!this.currentQuestion) {
      // this is if there is no question currently displaying... and that happens at the beginning of the exam
      // this
      let choice = choose(this.unseenQuestions);
      // then repackage the stuff
      // before repackaging, we need to remove the question from unseenQuestions
      this.unseenQuestions = removeQuestion(choice, this.unseenQuestions);
      // then you can now repackage
      repackage(choice, "initial", 0); // this is repackaging the stuff shey you get...
      // so after repackaging, just push to seenQuestions
      // before pushing choice, we need to shuffle it up

      this.shuffle(choice); // shuffle up the options before pushing since it is already seen

      this.seenQuestions.push(choice);
      // we need to remove the question from unseenQuestion
      // then set choice to currentQuestion
      this.currentQuestion = choice;
    } else {
      // now things will make sense this way...
      // the only other thing that can happen is if the user wants to go to the next question in the tray...
      // two things is possible, if the question has been seen or not
      // we need to check if the next question has already been seen
      // this is the place where I can check for questions
      let nextQuestionId = this.currentQuestion.id + 1;
      // all this should happen if we go forward
      if (nextQuestionId <= this.quantity) {
        // this will prevent it from overflowing...
        if (!isPresent(nextQuestionId, this.seenQuestions)) {
          // if this is false, we need to choose another random question
          let choice = choose(this.unseenQuestions);
          //
          this.unseenQuestions = removeQuestion(choice, this.unseenQuestions);

          repackage(choice, "next", nextQuestionId);

          this.shuffle(choice);

          this.seenQuestions.push(choice);
          // console.log(choice) // you think I have time? nope nope...
          this.currentQuestion = choice;
        } else {
          // this is just as massive... // this is cool. and you know, making sense.
          // if it is present, just go to seen question and fetch it...
          this.currentQuestion = fetchQuestion(
            this.currentQuestion.id + 1,
            this.seenQuestions
          );
          // this will just simply set the next question to the next one... normally...
        }
      } else {
        // we may want to do something here later.. who knows...
      }
    }
  }

  previousQuestion() {
    // I need to be careful with the way I am writing this code...
    // the thing is that
    let prevQuestionId = this.currentQuestion.id - 1;

    if (prevQuestionId > 0) {
      // some people might jump and still want to prev... lolzzz
      if (!isPresent(prevQuestionId, this.seenQuestions)) {
        // i.e user has seen the questions he/she is preving to
        // so
        let choice = choose(this.unseenQuestions);
        this.unseenQuestions = removeQuestion(choice, this.unseenQuestions);

        repackage(choice, "prev", prevQuestionId);

        this.shuffle(choice)

        this.seenQuestions.push(choice);

        this.currentQuestion = choice;
      } else {
        this.currentQuestion = fetchQuestion(
          this.currentQuestion.id - 1,
          this.seenQuestions
        );
      }
      // then we do this
      // one fact exists, all prev questions are seen, so all we need is to fetch prev questions
    } else {
      // we do that...
      // do you understand?
    }
  }

  jumpToQuestion(num) {
    // and this too
    // jumping to a question is very simple too... very easy and simplistic...
    // once attempted, it's possible the user has seen such question before
    if (!isPresent(num, this.seenQuestions)) {
      let choice = choose(this.unseenQuestions);
      this.unseenQuestions = removeQuestion(choice, this.unseenQuestions);
      // then you can now repackage
      repackage(choice, "num", num); // this is repackaging the stuff shey you get...
      // so after repackaging,
      this.shuffle(choice); // shuffle up the options

      this.seenQuestions.push(choice); // then push
      // we need to remove the question from unseenQuestion
      // then set choice to currentQuestion
      this.currentQuestion = choice;
    } else {
      this.currentQuestion = fetchQuestion(num, this.seenQuestions);
      // maybe not yet sha, I will work on the errors later...
    }
  }
  // working on shuffling functionality
  // in this way, the student can choose to use the shuffle functionality or not... but right now, the shuffle is on whether the user likes it or not...
  // think object oriented always...
  shuffle(choice) {
    // it takes three functions to shuffle up object. someone else might do it with one line. someone like marijn
    // convert list of options to object with the one having the correct ans set to true while others are set to false
    function convertOptToObj(options, answer) {
      let opt = {
        0: "A",
        1: "B",
        2: "C",
        3: "D",
        4: "E",
      };
    
      let newOptionList = []; // this holds our optionobjlist
    
      for (let i = 0; i < options.length; i++) {
        // consoele.log
        let optionObj = new Object(null);
    
        optionObj.main = options[i]; // object.main is just the option itselff
    
        if (opt[i] == answer) { // if the option is the answer, set to true
          optionObj.answer = true;
        } else {
          optionObj.answer = false; // otherwise set to false
        }
    
        newOptionList.push(optionObj); // pushing everything
      }

      return newOptionList; // this will surely work...
    }
    
    // alright time to shuffle up
    // this function takes the output of convertOptToObj function and shuffle it up
    function shuffleOptions(options) {
      let newArr = new Array;
      let optionWords = [] // this is to check for duplicate
      // inf looop checker
      let count = 0;
      while (newArr.length != options.length) {
        if (count > 500) {
          console.log("there is a problem!!!!!!");
          break;
        }
        // now let's work on this stuff
        let choice = choose(options)
        if (!optionWords.includes(choice.main)) {
          newArr.push(choice)
          optionWords.push(choice.main);
        }

        // inf loop checker
        count += 1
      }
      return newArr // works as need...
    }

    // now let's do the last part...
    // the last part is about converting back to normal...
    // this function takes the output of the shuffleOption function

    function convertToList(options) {
      // alright, let's continue
      let resObj = {
        options: [],
        answer: null
      }

      let opt = {
        0: "A",
        1: "B",
        2: "C",
        3: "D",
        4: "E",
      };

      for (let i = 0; i < options.length; i++) {
        resObj.options.push(options[i].main);
        if (options[i].answer) { // if it is the answe
          resObj.answer = opt[i] // balanced
        }
      }

      return resObj
    }
    
    let resObject = convertToList(shuffleOptions(convertOptToObj(choice.options, choice.ans)))

    // set the option to the new shuffled stuff
    choice.options = resObject.options;
    choice.ans = resObject.answer;
    // set the answer to the same thing as well
    // job done and complete. thank you
    // now everything is working perfectly...
    // testing function
    // console.log(convertOptToObj(this.currentQuestion.options, this.currentQuestion.ans));
    // everything is making perfect sense to me now..
    // correcto
  }

  loadKeys(element) {
    // helps generate appropriate number of keys for this particular subject...
    let keyStr = ""; // 

    for (let i = 1; i <= this.quantity; i++) {
      keyStr += `<p class="numbers" id="num${i}">${i}</p>`; // this will generate the keys for me
    }

    element.innerHTML = keyStr; // this will set the keys to the keyStr which depends on the quantity of the question of this exam
    // no extra addition, just set it to it. shikena
  }

  showAnsweredQuestions() {
    // which one will I iterate over? the question or the nodes..
    // it seems I will have to iterate multiple times for now... I don't seem to have a choice.
    // I will write a better algorithm some later time...
    // hmmm... what's going to sup
    // how do we compare. lolz...
    for (let i = 1; i <= this.quantity; i++) {
      let node = document.querySelector(`#num${i}`);
      // this will work if node is found...
      // it's not hard coded...
      let found = false; // this is to know if the number has been found... you understand?

      for (let q of this.seenQuestions) {
        // iterating over list of questions too...
        if (q.id == i) {
          // if question is found
          // then update the color
          // it is sure to find or not find..
          found = true;

          if (!q.userAnswer) {
            // just leave the stuff white
            // haven't answered
            node.style.backgroundColor = "white";
            node.style.color = "black";
          } else if (q.ans.toUpperCase() != q.userAnswer) {
            // answered wrongly
            node.style.backgroundColor = "crimson";
            node.style.color = "white";
          } else if (q.ans.toUpperCase() == q.userAnswer) {
            // answered correctly
            node.style.backgroundColor = "green";
            node.style.color = "white";
          }
        }
      }
      // how do I know it hasn't been found

      if (!found) {
        node.style.backgroundColor = "white";
        node.style.color = "black";
      }
    }
  }

  updateAnswer() {
    // the only thing we need is the current question
    let id = this.currentQuestion.id;
    // getting the answer of the list elements
    let answerList = document.getElementsByName(`Q${id}`);
    // searching through the list to see which one is checked...
    for (let ans of answerList) {
      if (ans.checked) {
        this.currentQuestion.userAnswer = ans.value;
      }
    }
  }

  markQuestions(element) {
    let score = 0
    for (let q of this.seenQuestions) {
      if (!q.userAnswer) continue;
      if (q.ans.toUpperCase() == q.userAnswer) score += 1;
      if (q.ans.toUpperCase() != q.userAnswer) score -= 1; // let's make it even...
    }

    this.score = ( score / this.quantity) * 100;

    element.textContent = this.score.toFixed(2);
  }

  changeColor(element) {
    let percentScore = this.score;

    if (percentScore == 100) {
      element.style.color = "goldenrod";
    } else if (percentScore >= 80) {
      element.style.color = "blue";
    } else if (percentScore >= 70) {
      element.style.color = "green";
    } else {
      element.style.color = "crimson";
    }
  }
}

export { Exam };

// an exam a lot of stuff going on in it. opor se...
// just adding some little info to the stuff and everything is cool...
