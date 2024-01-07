const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
// const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // loginForm.classList.add(HIDDEN_CLASSNAME);

    paintGreetings(username);
    
    if (username === "") {
        alert("Please write your name");
    } else if (username.length > 15) {
        alert("Your name is too long.");
    } else {
        console.log(username);
    }
}

function paintGreetings(username) {
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;   // backtick
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginButton.addEventListener("click", onLoginBtnClick);
// loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
