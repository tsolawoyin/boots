// now is the time to write an alogorithm that helps display answers to questions...

// it is not difficult at all...

// we only show answer if mode is practice. otherwise, nope nope...
// there is no more exam mode joh... Boot philosophy is clear and static... I don't know sha, may change over time.

// now, at this point, what we have is the questions...

// we don't have any problem building the questions

// we should only work on displaying the contents properly

// the only thing we need to work on is the colors of the keys

// questions is a list of answered questions...
// the show answer algorithm is not correct

// the show answer will have a part to play in this... we will have to be showing answers immediately...
function showAnsweredQuestions (questions) { // which one will I iterate over? the question or the nodes..
    // it seems I will have to iterate multiple times for now... I don't seem to have a choice.
    // I will write a better algorithm some later time...
    // hmmm... what's going to sup
    // how do we compare. lolz...
    for (let i = 1; i <= numberOfQuestion; i++ ) {
        let node = document.querySelector(`#num${i}`); 
        // it's not hard coded...
        let found = false; // this is to know if the number has been found... you understand?

        for (let q of questions) {
            // iterating over list of questions too...
            if (q.id == i) { // if question is found
                // then update the color
                // it is sure to find or not find..
                found = true

                if (!q.userAnswer) {
                    // just leave the stuff white
                    // haven't answered
                    node.style.backgroundColor = "white";
                    node.style.color = "black";
               } else if (q.ans != q.userAnswer) {
                    // answered wrongly
                    node.style.backgroundColor = "crimson";
                    node.style.color = "white";    
               } else if (q.ans == q.userAnswer) {
                    // answered correctly
                    node.style.backgroundColor = "green";
                    node.style.color = "white";
               }
            }
        }
        // how do I know it hasn't been found

        if (!found) {
            node.style.backgroundColor = "white";
            node.style.color = "black";
        }
    }   
}

export { showAnsweredQuestions }

// when you know algorithms and ds, you are a programmer.