
const UI = document.querySelector("#ui")
const images = ["./images/2022-12-20.png", "./images/2018-05-14.jpg", "./images/2024-01-04.jpg", "./images/IMG_20211023_131140_757.jpg", "./images/IMG_20220917_095503_924.jpg", "./images/2022-08-10.jpg"]

let currImg = null


UI.addEventListener("click", e => {
    // change the image on every click
    currImg = images[Math.floor(Math.random() * images.length)];
    UI.innerHTML = `<img src="${currImg}" alt="ui" class="w-100 pb-3"/>`
})