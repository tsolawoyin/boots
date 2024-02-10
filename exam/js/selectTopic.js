import { subject, chemistry, biology, english } from "./declarations.js";

// modules will make your code extremely modular... lolzzz.
// let choosenSubject = "chemistry"
let choosenTopic = null;

choosenTopic = document.querySelector("#chm")
chemistry.style.display = "block"


// selecting topic is rather simple
subject.addEventListener("change", e => {
    if (subject.value == "chemistry") {
        chemistry.className = "block form-select mb-2"
        biology.className = "d-none form-select mb2"
        english.className= "d-none form-select mb-2"
        choosenTopic = document.querySelector("#chm")
    } else if (subject.value == "biology") { // biology
        chemistry.className = "d-none form-select mb2"
        biology.className = "block form-select mb-2"
        english.className = "d-none form-select mb-2"
        choosenTopic = document.querySelector("#bio")
    } else {
        chemistry.className = "d-none form-select mb-2"
        biology.className = "d-none form-select mb-2"
        english.className = "block form-select mb-2"
        choosenTopic = document.querySelector("#eng")
    }
})

// this is not a function thing, slightly difficult to modularize but we can do this...
export { choosenTopic } // this is the only thing we will need kind of...