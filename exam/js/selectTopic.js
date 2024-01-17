
// initially before anything changes, we need some default values

choosenSubject = "chemistry"
choosenTopic = document.querySelector("#chm")
chemistry.style.display = "block"


// selecting topic is rather simple
subject.addEventListener("change", e => {
    if (subject.value == "chemistry") {
        chemistry.style.display = "block"
        biology.style.display = "none"
        english.style.display = "none"
        choosenTopic = document.querySelector("#chm")
    } else if (subject.value == "biology") { // biology
        chemistry.style.display = "none"
        biology.style.display = "block"
        english.style.display = "none"
        choosenTopic = document.querySelector("#bio")
    } else {
        chemistry.style.display = "none"
        biology.style.display = "none"
        english.style.display = "block"
        choosenTopic = document.querySelector("#eng")
    }
})