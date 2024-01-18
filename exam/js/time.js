

function time() {
    if (seconds == 0) {
        seconds = 59
        minutes -= 1
    }   else seconds -= 1

    if (minutes < 10) {
        timeEl.style.color = "crimson"
    }
    // end exam
    if (minutes < 0) {
        endExam()
    }

    // deal with displaying time
    showTIme(minutes); // simple as abc...
    // updating UI
}
// append zero to time
function appendZero(s) {
    if (s.length == 1) {
        return `0${s}`
    } else return s
}

function showTIme(minutes) {
    if (minutes < 0) {
        minEl.textContent = "00";
        secEl.textContent = "00"
    } else {
        minEl.textContent = appendZero(String(minutes))
        secEl.textContent = appendZero(String(seconds))
    }
}

// no, maybe the endExam function should be standalone
