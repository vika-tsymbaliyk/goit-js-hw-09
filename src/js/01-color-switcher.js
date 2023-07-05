const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyPage = document.querySelector('body');
let timerId = null;

btnStart.addEventListener("click", startColorChange);
btnStop.addEventListener('click', stopColorChange);

function startColorChange() {
    timerId = setInterval(() => {
        bodyPage.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
}

function stopColorChange() {
    clearInterval(timerId);
    btnStart.disabled = false;
    btnStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}