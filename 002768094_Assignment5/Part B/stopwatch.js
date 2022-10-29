const time_el = document.querySelector('.watch .time');
const Start_btn = document.getElementById('Start');
const Stop_btn = document.getElementById('Stop');
const Reset_btn = document.getElementById('Reset');
var checkk = 0;
let seconds = 0;
let interval = null;
Start_btn.addEventListener('click', start);
Stop_btn.addEventListener('click', stop);
Reset_btn.addEventListener('click', reset);

function timer() {
  return new Promise((resolve, reject) => {
    seconds++;
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;
    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;
    time_el.innerText = `${hrs}:${mins}:${secs}`;
  });
}

async function start() {
  if (checkk == 0) {
    interval = await setInterval(timer, 1000);
    checkk = 1;
  }
  return "Error";
}

async function stop() {
  await clearInterval(interval);
  interval = null;
  checkk = 0;
  return "Error";
}

async function reset() {
  stop();
  seconds = 0;
  time_el.innerText = '00:00:00';
  return "Error"
}
