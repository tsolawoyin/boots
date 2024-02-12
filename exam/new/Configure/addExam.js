import { addBtn, addedSubjectsEl } from "./constants.js";
// obviously it doesn't come from that side

// the code will later break in the future and it will be difficult to debug..

const choosenSubjects = [];
let counter = 1;

// where does this subject come from
console.log(subject.value)

// let's work on this thing here...
addBtn.addEventListener("click", (e) => {
    // yup yup, we only push if present
    if (
      !checkForDuplicates(choosenSubjects, subject.value, topic.value) &&
      counter < 5
    ) {
      choosenSubjects.push({ subject: subject.value, topic: topic.value });
      // it will be here simply
      let current = choosenSubjects[choosenSubjects.length - 1];
  
      addedSubjectsEl.innerHTML += `<li>${current.subject} : ${current.topic} <span class="remove">X</span></li>`;
  
      counter += 1; // this will ensure that user only selects max of four....
    } else if (counter >= 5) {
      alert("Maximum of only four questions is allowed"); // this is terribly serious
    }
  
    // this is another dimension of coding. o deep...
  });
  
  function checkForDuplicates(choosen, subject, topic) {
    for (let c of choosen) {
      if (c.subject == subject && c.topic == topic) return true;
    }
  }