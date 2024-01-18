
// this is the link tag in my opinion
// simple routing

// for going to the exam interface
practiceBtn.addEventListener("click", e => {
    // this is where all the manipulation occurs. 
    // it's not even something much sef...
    homepage.style.display = "none"
    loginInterface.style.display = "grid"; // this should work now

    submitted = false; // submitted is false to begin with... 
    // I have to see all the app as one large software now...
    scoreEl.textContent = "0" // everytime we want to start a new exam, the score tab should show zero
    // before practicing, set the seenQuestion to an empty list normally.
    seenQuestions = []; // thank you.
})

// for going back to home
homeBtn.addEventListener("click", e => {
    // omo, removing home doesn't makes sense, remove ke?
    notesPage.style.display = "none" // turn off notesPage in case it is opened... 
    // now we are doing all this thing manually... 
    // that's why you should learn react.. lol
    // doing it manually helps you appreciate react even better...

    if (!isLogin) {
        homepage.style.display = "block"
        loginInterface.style.display = "none"; // omo, there is something
        examInterface.style.display = "none";
        // this will ensure that the time is reset...
        showTIme(minutes);
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