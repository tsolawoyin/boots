import { available } from "./Subjects.js";

const subject = document.querySelector("#subject");
const topic = document.querySelector("#topic");
const userTime = document.querySelector("#user-time")

// loading all subjects available...
for (let a of available) {
    subject.innerHTML += `<option value="${a.title.toLowerCase()}">${a.title.toUpperCase()}</option>`
}

// load first topic
// ================== loading first topic =================
let options = ""

for (let t of available[0].topic) {
    options += `<option value="${t}">${t}</option>`
}

topic.innerHTML = options
// =========================================================
// console.log(subject, topic)

// now I can use the change eventListener to detect changes
// this is much better and more dynamic...
subject.addEventListener("change", e => {
    // here we just simply load the topic for the subject
    for (let a of available) {
        if (subject.value == a.title.toLowerCase()) {
            let options = ""
            for (let t of a.topic) {
                options += `<option value="${t}">${t}</option>` 
            }
            topic.innerHTML = options
        }
    }
})

// adding time to user time
// making sense like this...
// I can call this function another name sometimes later sha...
for (let i = 5; i <= 60; i += 5) {
    userTime.innerHTML += `<option value="${i}">${i} min</option>`
}

// add time function here too

export { subject, topic }

// because this stuffs are DOMelements, I can actually make them work altogether..

// the add button does more than just adding stuff... it's a lot of work...
// I think it would be better if it is inside the startUp engine...

// turn all this to a function... hmmm. just in the name of making everything dynamic and resuable.
// I am not writing a library abeg...