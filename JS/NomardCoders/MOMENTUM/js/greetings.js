const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");
const savedUserName = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    // 어떤 event의 기본 행동(브라우저 기본 동작)이든지 발생되지 않도록 막음.
    // 현재 브라우저의 새로고침을 막고 있음.
    console.log(loginInput.value);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(userName);
}

function paintGreetings(userName) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello, ${userName}`;
}

if (savedUserName === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // hide the form
    paintGreetings(savedUserName);
}
