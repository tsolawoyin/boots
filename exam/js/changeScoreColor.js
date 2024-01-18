
// updating the background color of user score

function changeColor() {
    let percentScore = (score / numberOfQuestion) * 100;

    if (percentScore == 100) {
        scoreUpdate.style.color = "goldenrod"
    } else if (percentScore >= 80) {
        scoreUpdate.style.color = "blue";
    } else if (percentScore >= 70) {
        scoreUpdate.style.color = "green";
    } else {
        scoreUpdate.style.color = "crimson"
    }
    
}