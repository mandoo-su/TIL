const clock = document.querySelector(".clock");

function getClock() {
    const date = new Date();
    if (date.getHours() < 10) {
        clock.innerText = `0${date.getHours()}`;
    } else {
        clock.innerText = `${date.getHours()}`;
    }

    if (date.getMinutes() < 10) {
        clock.innerText += `:0${date.getMinutes()}`;
    } else {
        clock.innerText += `:${date.getMinutes()}`;
    }

    if (date.getSeconds() < 10) {
        clock.innerText += `:0${date.getSeconds()}`;
    } else {
        clock.innerText += `:${date.getSeconds()}`;
    }
}

getClock();
setInterval(getClock, 1000);
