const title = document.querySelector(".hello h1");
console.dir(title);

function handleTitleClick() {
    console.log("title was Clicked.");
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerHTML = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerHTML = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowOffline() {
    alert("kill wifi");
}

function handleWinowOnline() {
    alert("all good");
}

function handleCopy() {
    alert("Copier!");
}
//title.addEventListener("click", handleTitleClick);
title.onclick = handleTitleClick;
// when clicked, conduct function handleTitleClick
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
// TODO : when clicked again, change color

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWinowOnline);
