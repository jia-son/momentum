const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const link = document.querySelector("a");


function onLoginSumbit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}


function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener("submit", onLoginSumbit);
link.addEventListener("click", handleLinkClick)