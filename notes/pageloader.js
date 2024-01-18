
// declaration is not necessary honestly. we just traverse the tree, and do the necessary things

// helps to load appropriate content...
const contents = document.querySelector(".contents");
const topics = document.querySelector("main");

let contentChild = contents.children;
let topicChild = topics.children;

let current = topicChild[0] // selecting the first child

contents.addEventListener("click", e => {

    let clickedOn = e.target; // get us the selected element
    
    for (let c of topicChild) {
        if (c.id == clickedOn.id) {
            c.style.display = "block";
        } else {
            c.style.display = "none"; // bug will not kill me. eh
        }
    }
})

displayFirstContent(topicChild)

function displayFirstContent(topics) {
    for (let i = 0; i < topics.length; i++) {
        if (i == 0) {
            topics[i].style.display = "block"
        } else {
            topics[i].style.display = "none"
        }
    }
}

// always getting better.. I am using linux, I need to get acquainted with the command line...