
const body = document.querySelector ('body');
const startBtn = document.querySelector('[data-action=start]');
const stopBtn = document.querySelector('[data-action=stop]');
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let intervalId = null;
  function enableStartBtn (){
    startBtn.setAttribute("disabled", "disabled")
  };
  function disableStartBtn (){
    startBtn.removeAttribute("disabled")
  }
  function startSwitchColors () {
      intervalId = setInterval(() => {
const colorId =randomIntegerFromInterval(0,colors.length);
body.style.backgroundColor = colors[colorId];
enableStartBtn()
      }, 1000);
  }
  function stopSwitchColors () {
  clearInterval(intervalId);
  disableStartBtn()
  }
  startBtn.addEventListener('click', startSwitchColors);
  stopBtn.addEventListener('click', stopSwitchColors);