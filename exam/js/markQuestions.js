
// we mark only seen questions
// seen questions might either be answered or not and that's all... 

// the last just worked. honestly. and that's all. 

// web programming is not bad. When you know HOW TO CODE!
// there shouldn't be negative marking henceforth...
function markQuestions (numberOfQuestion, questions) {
    let score = 0;

    for (let q of questions) {
        if (!q.userAnswer) continue;
        if (q.ans == q.userAnswer) score += 1;
        if (q.ans != q.userAnswer) score -= 1; // let's make it even...
    }

    score = (score / numberOfQuestion) * 100

    return score.toFixed(2);
}

export { markQuestions }
