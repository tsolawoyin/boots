import { addedSubjectsEl } from "./Configure/constants.js";
import { Questions } from "../questionDB/Questions.js";
import { Exam } from "./Exam/Exam.js";

function generateExam() {
    let choosenExams = Array.from(addedSubjectsEl.children);
    // this will only be called on the startBtn
    if (choosenExams.length == 0) {
        throw new Error("Please add at least one exam to start.");
        // so I can safely handle the error in each block of code...
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
    let sub = Questions.find(e => e.subject == subject); // fetching the subject as a whole
    
    if (sub) {
        return new Exam(subject, topic, sub.questions, qty)
    }

    // the exam functions takes care of the rest. makes sense. I did a lot of work already.

}

export { generateExam , createExam }