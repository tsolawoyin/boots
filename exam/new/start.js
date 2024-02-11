import { subject, topic } from "./renderLogin.js";

// the start and add functionality resides in this file...
// I am more focused on the functionality for now sha...

const addBtn = document.querySelector("#add");
const addSubjects = document.querySelector("#added-subjects");
const userTime = document.querySelector("user-time"); // this is really important too...
const startBtn = document.querySelector("#start");

const choosenSubjects = [];
let counter = 1;


startBtn.addEventListener("click", e => {
    // working on this thing...
})


addBtn.addEventListener("click", (e) => {
  // yup yup, we only push if present
  if (
    !checkForDuplicates(choosenSubjects, subject.value, topic.value) &&
    counter < 5
  ) {
    choosenSubjects.push({ subject: subject.value, topic: topic.value });
    // it will be here simply
    let current = choosenSubjects[choosenSubjects.length - 1];

    addSubjects.innerHTML += `<li>${current.subject} : ${current.topic}</li>`;

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

// there should option to remove a chosen item from a list of choosen object...
// but hmm.
