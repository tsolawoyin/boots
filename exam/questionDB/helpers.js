// chemistry helpers
const isotope = (up, down, el) => {
    return `<sup>${up}</sup><sub>${down}</sub>${el}`
}

const eConfig = (...rest) => {
    // it can be arbitrary number. who know where it will end
    let config = "";

    for (let r of rest) {
        if (typeof r == "string") config += r;
        else config += `<sup>${r}</sup>`
    }

    return config
}
// console.log(eConfig("1s", 2, "2s", 2))
// console.log(eConfig("1s", 2, "2s", 2, "2p", 3))
// console.log(eConfig("1s", 2, "2s", 2, "2p", 6))
// etc...
// CO2, NO, H2SO4
const formula = (...rest) => {
    let config = "";

    for (let r of rest) {
        if (r == "aq" || r == "g" || r == "l" || r ==  "s") config += `<sub>(${r})</sub>` 
        else if (typeof r == "number") config += `<sub>${r}</sub>`
        else config += r;
    }

    return config
}
// makes sense. it will work
// this can also be in form 

const ion = (a, b, c) => {
    return `${a}<sup>${b ? b : ""}${c ? c: ""}</sup>`
}

// physics helpers
const units = (...rest) => {
    let unit = "";
    for (let r of rest) {
        if (typeof r == "string") unit += r;
        if (typeof r == "number") {
            if (r == 1) continue; // if r is 1, we don't need to display it...
            else unit += `<sup>${r}</sup>`;
        }
    }
    return unit
}
// helps render exponent correclty
const exp = (pow) => {
    return `10<sup>${pow}</sup>`
}

// english helper
// wetin you gain if you can write algorithms... sorry ooo...
const mainWord = (word, statement) => {
    // let's think of how to make this work...
    let posn = statement.search(word)
    if (posn != -1) {
        let fPart = statement.slice(0, posn)
        let sPart = statement.slice(posn + word.length,)
        return `${fPart}<span class="main-word"><em>${word}</em></span>${sPart}`
    } else return statement;
}

// let o = mainWord('hello', "the man said hello to him")
// console.log(o)

// the repacking must be done before displaying