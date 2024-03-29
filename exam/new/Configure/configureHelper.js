// these code works for the login interface...
import { available } from "./Subjects.js";

function loadSubjects(el) {
  for (let a of available) {
    el.innerHTML += `<option value="${a.title}">${a.title.toUpperCase()}</option>`;
  }
}

function loadFirstTopics(el) {
  let options = "";

  for (let t of available[0].topic) {
    options += `<option value="${t}">${t}</option>`;
  }

  el.innerHTML = options;
}
 
function changeSubjects(subject, topic) {
    subject.addEventListener("change", (e) => {
      // here we just simply load the topic for the subject
      for (let a of available) {
        if (subject.value == a.title) {
          let options = "";
          for (let t of a.topic) {
            options += `<option value="${t}">${t}</option>`;
          }
          topic.innerHTML = options;
        }
      }
    });
}

function addTime(el, time) {
  for (let i = 5; i <= time; i += 5) {
    if (i == 50) {
      el.innerHTML += `<option value="${i}" selected>${i} min</option>`  
    } else {
      el.innerHTML += `<option value="${i}">${i} min</option>`;
    }
  }
}

// let the add function also come here...

export { loadSubjects, loadFirstTopics, changeSubjects, addTime}