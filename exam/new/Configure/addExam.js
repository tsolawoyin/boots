import { addBtn, addedSubjectsEl, subjectEl, topicEl } from "./constants.js";
// obviously it doesn't come from that side

// the code will later break in the future and it will be difficult to debug..

// ====================== TAKE NOTE !!!!!!!!!!!!!!!!!! =========================
// iT HAPPENS THAT JAVASCRIPT CAN READ THE VALUES OF ELEMENTS WITH AN ID WITHOUT EXPLICITLY 
// DECLARING THEM.
// SUCH ELEMENT IN THIS CODE IS subject and topic
// WATCH OUT FOR subject.value and topic.value
// =============================================================================

const choosenSubjects = [];
let counter = 1;
let allowed = 20;

// where does this subject come from
// console.log(subject.value);

// let's work on this thing here...
addBtn.addEventListener("click", (e) => {
  // yup yup, we only push if present
  if (
    !checkForDuplicates(choosenSubjects, subjectEl.value, topicEl.value) &&
    counter < allowed
  ) {
    choosenSubjects.push({ subject: subjectEl.value, topic: topicEl.value });
    // it will be here simply
    let current = choosenSubjects[choosenSubjects.length - 1];

    // maybe I should get into the habit of creating dom elements
    // enough of using innerHTML...
    const li = document.createElement("li");
    li.textContent = `${current.subject} : ${current.topic}`
    li.className = "text-primary";

    addedSubjectsEl.append(li)

    counter += 1; // the user can add as much as they like. It's none of my business joh.
  } else if (counter >= allowed) {
    alert("Max number of exams added."); // this is terribly serious
  }

  // this is another dimension of coding. o deep...
});

function checkForDuplicates(choosen, subject, topic) {
  for (let c of choosen) {
    if (c.subject == subject && c.topic == topic) return true;
  }
}
