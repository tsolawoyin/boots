// this code will help validate
// the isMember variable is particular here...
let isMember = false
// return true if user is present
function valid(user) {
    let regex = /^[a-zA-Z]{3,}$/
    return regex.test(user)
}

document.querySelector("#username").addEventListener("keyup", e => {
    if (valid(username.value.trim())) {
        isMember = true;
        username.style.borderBottom = "2px solid green";
    } else {
        isMember = false;
        username.style.borderBottom = "2px solid crimson";
    }
})

export { isMember }

// isMember is sure not to change again... whatever it is here is final...

// export { valid } // this function is just specific here..