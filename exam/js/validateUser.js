// this code will help validate



// return true if user is present
function valid(user) {
    let regex = /[a-zA-Z]{3,}/
    return regex.test(user)
}

username.addEventListener("keyup", e => {
    if (valid(username.value)) {
        isMember = true;
        username.style.borderBottom = "2px solid green";
    } else {
        isMember = false;
        username.style.borderBottom = "2px solid crimson";
    }
})