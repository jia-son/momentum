const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


function onLoginBtnClcik() {
    const username = loginInput.value;
    console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClcik);