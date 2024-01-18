
practiceBtn.addEventListener("click", e => {
    // this is where all the manipulation occurs. 
    // it's not even something much sef...
    homepage.style.display = "none"
    loginInterface.style.display = "grid"; // this should work now

    submitted = false; // submitted is false to begin with... 
    // I have to see all the app as one large software now...
})

homeBtn.addEventListener("click", e => {
    // omo, removing home doesn't makes sense, remove ke?
    if (!isLogin) {
        homepage.style.display = "block"
        loginInterface.style.display = "none"; // omo, there is something
        examInterface.style.display = "none";
        // this will ensure that the time is reset...
        showTIme(minutes);
    } else {
        window.alert("please refresh the page...");
        // a lot of things have happened in the code that only a refresh can bring it back to normal... jesus
    }
})