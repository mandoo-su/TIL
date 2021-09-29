const sections = document.querySelectorAll("section");
// const bubble = document.querySelector(".bubble");
// const gradients = [
//     "linear-gradient(to right top, #acbb78, #f7f8f8)",
//     "mintcream",
//     "linear-gradient(to right top, #00416a, #e4e5e6)",
//     "pink",
//     "linear-gradient(to right top, #2c3e50, #bdc3c7)",
// ];
const navs = document.querySelectorAll("nav div");
console.log(navs);

const options = {
    threshold: 0.7,
};
let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    navs.forEach((nav) => {
        nav.classList.remove("active");
    });
    entries.forEach((entry) => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(
            `[data-page=${className}]`
        );
        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left,
        };

        if (entry.isIntersecting) {
            activeAnchor.classList.add("active");
            // bubble.style.setProperty(
            //     "height",
            //     `${directions.height}px`
            // );
            // bubble.style.setProperty(
            //     "width",
            //     `${directions.width}px`
            // );
            // bubble.style.setProperty("top", `${directions.top}px`);
            // bubble.style.setProperty("left", `${directions.left}px`);
            //bubble.style.background = gradients[gradientIndex];
        }
    });
}
sections.forEach((section) => {
    observer.observe(section);
});

navs.forEach((nav) => {
    nav.addEventListener("click", handleClickNav);
});

function handleClickNav(nav) {
    const className = nav.target.getAttribute("data-page");
    const activeAnchor = document.querySelector(`.${className}`);
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
        height: coords.height,
        width: coords.width,
        top: coords.top,
        left: coords.left,
    };
    window.scrollBy(0, directions.top);
}
