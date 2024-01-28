
let started = localStorage.getItem("started");
const errorPage = document.querySelector(".error")
const header = document.querySelector("header");
const footer = document.querySelector("footer")
const inputEl = document.querySelector("#unlock");
const submitEl = document.querySelector("#unlock-btn");
const errMini = document.querySelector("#err")
// console.log(started)


// if (started == "true") {
//     displayErr()
// }

function displayErr() {
    homepage.remove(); // just remove none since we don't need it...
    errorPage.style.display = "grid";
    header.remove();
    footer.remove();
}
// can only be unlocked if you know the password
submitEl.addEventListener("click", e => {
    if (inputEl.value == "scabadoo") {
        localStorage.setItem("started", false);
        errMini.innerHTML += `<p class="text-white">You can now refresh the page.</p>`
    } else {
        errMini.innerHTML += `<p class="text-white">Incorrect password.</p>`
        inputEl.value = "";
    }
})

// 08066941888 mommy temi