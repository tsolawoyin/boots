
// updating the background color of user score

// Number, DOMelement -> update the color based on the percentage score
// this function only has side effect. Makes sense. may be...
function changeColor(numberOfQuestion, element) {
    let percentScore = (score / numberOfQuestion) * 100;

    if (percentScore == 100) {
        element.textContent += " 👽"
        element.style.color = "goldenrod"
    } else if (percentScore >= 80) {
        element.style.color = "blue";
    } else if (percentScore >= 70) {
        element.style.color = "green";
    } else {
        element.style.color = "crimson"
    }
}

export { changeColor }

// code modularization helps make function easy to test individual
// and even if not testable, makes it easy to understand and reason about