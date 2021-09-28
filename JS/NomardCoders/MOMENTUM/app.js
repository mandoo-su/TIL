const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(event) {
    event.preventDefault();
    // 어떤 event의 기본 행동(브라우저 기본 동작)이든지 발생되지 않도록 막음.
    // 현재 브라우저의 새로고침을 막고 있음.
    console.log(loginInput.value);
}
loginForm.addEventListener("submit", onLoginSubmit);
