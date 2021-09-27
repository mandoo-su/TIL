const title = document.querySelector(".hello h1");
console.dir(title);

function handleTitleClick() {
    console.log("title was Clicked.");
    // title.style.color = "blue";
    const currentTitleColor = title.style.color;
    let newTitleColor;
    if (currentTitleColor === "blue") {
        newTitleColor = "tomato";
    } else {
        newTitleColor = "blue";
    }
    title.style.color = newTitleColor;
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

//title.addEventListener("click", handleTitleClick);
title.onclick = handleTitleClick;
// when clicked, conduct function handleTitleClick
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
// (complete)TODO : when clicked again, change color

window.addEventListener("resize", handleWindowResize);
