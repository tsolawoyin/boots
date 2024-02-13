import { fetchQuestions, choose } from "./fetchQuestions.js";
import { repackage } from "./repackage.js";
import { isPresent, removeQuestion, fetchQuestion } from "./helpers.js";
// the name of the user doing the exam is another thing...

// Subject: String (describing subject type)
// Topic: String (describing topic)
// Questions: listOfQuestions
// Quantity: Number (amount of questions users want to answer)
class Exam {
  constructor(subject, topic, questions, quantity) {
    // subject and topic will be choosen before exam...
    this.subject = subject;
    this.topic = topic;
    this.currentQuestion = null;
    this.unseenQuestions = fetchQuestions(questions, topic, quantity); // instead of having a lot of questions inside unseen and picking anyone at random, we should be specific in terms of amount
    this.quantity = this.unseenQuestions.length; // the number of questions user is taking
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
      this.seenQuestions.push(choice);
      // we need to remove the question from unseenQuestion
      // then set choice to currentQuestion
      this.currentQuestion = choice;
    } else {
      // now things will make sense this way...
      // the only other thing that can happen is if the user wants to go to the next question in the tray...
      // two things is possible, if the question has been seen or not
      // we need to check if the next question has already been seen
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

          this.seenQuestions.push(choice);
          // console.log(choice) // you think I have time? nope nope...
          this.currentQuestion = choice;
        } else {
          // this is just as massive... // this is cool. and you know, making sense.
          // if it is present, just go to seen question and fetch it...
          // as per dy, I don't identify with anybody...
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
      // so after repackaging, just push to seenQuestions
      this.seenQuestions.push(choice);
      // we need to remove the question from unseenQuestion
      // then set choice to currentQuestion
      this.currentQuestion = choice;
    } else {
      this.currentQuestion = fetchQuestion(num, this.seenQuestions);
      // maybe not yet sha, I will work on the errors later...
    }
  }

  loadKeys() {
    // helps generate appropriate number of keys for this particular subject...
    let keyStr = "";
  
    for (let i = 1; i <= this.quantity; i++) {
      keyStr += `<p class="numbers" id="num${i}">${i}</p>`
    }

    return keyStr
  }
}

export { Exam };
