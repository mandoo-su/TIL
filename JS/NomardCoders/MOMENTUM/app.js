const HIDDEN = "hidden";

const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");

const link = document.querySelector("a");
function onLoginSubmit(event) {
    event.preventDefault();
    // 어떤 event의 기본 행동(브라우저 기본 동작)이든지 발생되지 않도록 막음.
    // 현재 브라우저의 새로고침을 막고 있음.
    console.log(loginInput.value);
    const userName = loginInput.value;
    localStorage.setItem("userName", userName);
    loginForm.classList.add(HIDDEN);
    greeting.classList.remove(HIDDEN);
    // toggle 을 사용하다가 remove로 변경
    // toggle의 경우 반대로 돌아가는 경우도 있을 시 사용하는게 나을 듯 함.
    greeting.innerHTML = `Hello, ${userName}`;
}

function onClickLink(event) {
    event.preventDefault();
    console.log(event); // PointerEvent
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", onClickLink);
