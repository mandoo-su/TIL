const sections = document.querySelectorAll("section");
const navs = document.querySelectorAll("nav div");
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
