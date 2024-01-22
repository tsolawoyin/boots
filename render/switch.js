
// this is the link tag in my opinion
// simple routing

// for going to the exam interface

practiceBtn.forEach(e => {
    e.addEventListener("click", e => {
        // this is where all the manipulation occurs. 
        // it's not even something much sef...
        practiceMode = true;

        homepage.style.display = "none" // turn off homepage

        readingGuideSection.style.display = "none" // turn off reading guide too if it's on...

        loginInterface.style.display = "grid"; // this should work now
    
        submitted = false; // submitted is false to begin with... 
        // I have to see all the app as one large software now...
        scoreEl.textContent = "0" // everytime we want to start a new exam, the score tab should show zero
        // before practicing, set the seenQuestion to an empty list normally.
        seenQuestions = []; // thank you.
    })
})

// for going back to home
homeBtn.addEventListener("click", e => {
    // omo, removing home doesn't makes sense, remove ke?
    notesPage.style.display = "none" // turn off notesPage in case it is opened...
    // we also need to turn off reading Guide section too
    readingGuideSection.style.display = "none" 
    // now we are doing all this thing manually... 
    // that's why you should learn react.. lol
    // doing it manually helps you appreciate react even better...
    // check if exam is still ongoing...
    if (!isLogin) {
        homepage.style.display = "block"
        loginInterface.style.display = "none"; // omo, there is something
        examInterface.style.display = "none";
        // this will ensure that the time is reset...
        showTIme(minutes);
        showQuote()
    } else {
        window.alert("please end current exam to continue");
        // a lot of things have happened in the code that only a refresh can bring it back to normal... jesus
    }
})

// for displaying notes
notesLoader.addEventListener("click", e => {
    // a lot of stuff will come in
    let current = e.target;

    let page = null;

    for (let el of notesTray) {
        if (current.textContent == el.topic.toLowerCase()) {
            page = el.page; // it's only the page we need...
            // do you get
        }
    }
    // turn off home
    homepage.style.display = "none"; 
    // set content
    notesPage.innerHTML = page;
    // and display it...
    notesPage.style.display = "block";
})

window.onload = showQuote


function showQuote() {
    // on loading, we should display a random quote
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    // this will select for me a random quote
    quotesEl.innerHTML = 
    `<p class="alert p-4 fs-4">${quote.note}</p>`
    // should work like this...
}

// everything working together for good.
// it's just a problem. And every problem has a solution...

// let's try to display the content of reading guides appropriate

readingGuideBtn.forEach(r => {
    r.addEventListener("click", e => {
        // turn off homepage.
        homepage.style.display = "none";
        // turn on reading guide

        // so we can do some if checks here
        renderGuide(r.classList[0])

        // I think this reading guide of a thing shouldn't just display ordinarily, it needs to render correctly...
    })
})

function renderGuide(subject) {
    let subjects = ["chemistry", "biology"]
    // the normal general stuff is the rendering of the whole guide section
    readingGuideSection.style.display = "block" // displaying this is compulsory
    // should render the content selected
    for (let s of subjects) {
        let guide = document.querySelector(`#${s}-guide`)
        let tab = document.querySelector(`#${s}-tab`)
        // console.log(guide)

        if (s == subject) {
            // tab styling
            tab.style.background = "crimson";
            tab.style.color = "white";
            tab.style.padding = ".4em";
            tab.style.borderRadius = "6px";

            guide.style.display = "block";
        } else {
            // tab styling
            tab.style.background = "white";
            tab.style.color = "black"; 
            tab.style.padding = ".4em";
            tab.style.borderRadius = "6px";

            guide.style.display = "none"
        }
    }
}
// making sense like that. everything gonna make sense...
// I solved all the problem in one go... Jesus, Dayo is a crazy programmer
// I have amassed a lot of skills overtime but I don't know...