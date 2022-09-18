const startStop = document.getElementById("startStop");
const pauseRestart = document.getElementById("pauseRestart");
let relogio = document.getElementById("relogio");

let sec = 0;
let min = 0;

startStop.addEventListener("click", () => {
  startStop.classList.toggle("active1");
  if (startStop.textContent === "Start") {
    startStop.textContent = "Stop";
    start();
  } else {
    startStop.textContent === "Stop";
    stop();
    startStop.textContent = "Start";
    pauseRestart.textContent = "Pause";
    pauseRestart.classList.remove("active2");
  }
});

pauseRestart.addEventListener("click", () => {
  if (startStop.textContent === "Start") {
    pauseRestart.textContent = "Pause";
  }
  if (pauseRestart.textContent === "Restart") {
    pauseRestart.classList.remove("active2");
  } else if (pauseRestart.textContent === "Pause") {
    pauseRestart.classList.add("active2");
  }

  if (
    (pauseRestart.textContent === "Pause", startStop.textContent === "Start")
  ) {
    pauseRestart.textContent = "Pause";
    pauseRestart.classList.remove("active2");
  } else if (pauseRestart.textContent === "Pause") {
    pauseRestart.textContent = "Restart";
    clearInterval(control);
  } else {
    pauseRestart.textContent === "Restart";
    start();
    pauseRestart.textContent = "Pause";
  }
});

function start() {
  control = setInterval(counter, 1000); // 1000ms = 1 segundo
}

function stop() {
  clearInterval(control);
  sec = 0;
  min = 0;
  return (relogio.innerText = "00:00");
}

function counter() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  } else if (min == 60) {
    return (relogio.innerText = "Acabou !!!"), clearInterval(control);
  }
  relogio.innerText = twoDigits(min) + ":" + twoDigits(sec);
}

function twoDigits(digit) {
  if (digit < 10) {
    return "0" + digit;
  } else {
    return digit;
  }
}
