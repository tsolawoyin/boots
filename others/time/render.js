import { Time, appendZero } from "./Time.js"

const hourEl = document.querySelector("#hour")
const minEl = document.querySelector("#min")
const secEl = document.querySelector("#sec")
const startBtn = document.querySelector("#start")
// const pauseBtn = document.querySelector("#pause")
const endBtn = document.querySelector("#end")

const readingTime = new Time(0, 0, 0);

let nextTime = null



startBtn.addEventListener("click", e => {
    nextTime = setInterval(() => {
        // do the incrementing
        readingTime.countUp()
        // then update the UI
        hourEl.textContent = appendZero(readingTime.hour);
        minEl.textContent = appendZero(readingTime.min);
        secEl.textContent = appendZero(readingTime.sec)
    }, 1000)
    // the time interval will start just in time...
})

endBtn.addEventListener("click", e => {
    clearInterval(nextTime)
})

endBtn.addEventListener("dblclick", () => {
    alert("hi")
})
