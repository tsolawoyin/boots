import { available } from "./Subjects.js";

function loadSubjects(el) {
  for (let a of available) {
    el.innerHTML += `<option value="${a.title.toLowerCase()}">${a.title.toUpperCase()}</option>`;
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
        if (subject.value == a.title.toLowerCase()) {
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
    el.innerHTML += `<option value="${i}">${i} min</option>`;
  }
}

// let the add function also come here...

export { loadSubjects, loadFirstTopics, changeSubjects, addTime}