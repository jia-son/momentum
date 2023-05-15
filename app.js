const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


function onLoginSumbit(event) {
    event.preventDefault();
    // const username = loginInput.value;
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSumbit);