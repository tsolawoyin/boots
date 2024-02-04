// this code will help validate

let validUsers = ["adekizzy", "danny", "sen", "victoria", "temmy", 'olamide','nifemi', "blessed academy"]

// return true if user is present
function valid(user) {
    return validUsers.includes(user.toLowerCase())
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