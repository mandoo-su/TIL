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
title.addEventListener("click", handleTitleClick);
// when clicked, conduct function handleTitleClick
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
// TODO : when clicked again, change color
