// this code will help validate

let validUsers = ["adekizzy", "danny", "tosin", "victoria", "temmy"]

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