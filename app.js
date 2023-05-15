const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


function onLoginBtnClcik() {
    console.log("Hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClcik);