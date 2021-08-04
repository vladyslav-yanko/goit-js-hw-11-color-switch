const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

let isActive = false;
let timerId = null;

refs.start.addEventListener("click", startBtn);
refs.stop.addEventListener("click", stopBtn);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startBtn() {
  if (isActive === false) {
    colorChoice();
    refs.start.disabled = true;
  }
}

function stopBtn() {
  clearInterval(timerId);
  isActive = false;
  refs.start.disabled = false;
}

function colorChoice() {
  timerId = setInterval(() => {
    isActive = true;
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
}