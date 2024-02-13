import { addedSubjectsEl } from "./Configure/constants.js";
import { Questions } from "../questionDB/Questions.js";
import { Exam } from "./Exam/Exam.js";

function generateExam() {
    let choosenExams = Array.from(addedSubjectsEl.children);
    // this will only be called on the startBtn
    if (choosenExams.length == 0) {
        alert("Please add at least one exam to start");
    } else {
        // let's continue
        let exams = choosenExams.map(e => {
            // instead of that, I can generate objects
            let textContent = e.textContent.split(" : "); // ["a", "b"]

            return {
                subject: textContent[0],
                topic: textContent[1]
            }

        });

        return exams;
    }
}

function createExam(subject, topic, qty) {
    // given a subject and a topic, create an exam object instance...
    // qty reps the number of questions needed.
    // now this function will do a good job at finding the necessary subject and topics and return a valid exam instance
    let sub = Questions.find(e => e.subject == subject);
    
    if (sub) {
        return new Exam(subject, topic, sub.questions, qty)
    }

    // the exam functions takes care of the rest. makes sense. I did a lot of work already.

}

function loadKeys(keys) {
    // let me just edit this section
    let keyStr = "";
  
    if (keys < 40) {
      for (let i = 1; i <= keys; i++) {
        keyStr += `<p class="numbers" id="num${i}">${i}</p>`;
      }
    } else {
      for (let i = 1; i <= 40; i++) {
        keyStr += `<p class="numbers" id="num${i}">${i}</p>`;
        // this one is just the normal old style
        // numberofquestion is 40 by default, so I don't get...
      }
    }
    return keyStr
  }

export { generateExam , createExam }