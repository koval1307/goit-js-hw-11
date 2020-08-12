
// const body = document.querySelector ('body');
// const startBtnRef = document.querySelector('[data-action=start]');
// const stopBtnRef = document.querySelector('[data-action=stop]');
// const colors = [
//     '#FFFFFF',
//     '#2196F3',
//     '#4CAF50',
//     '#FF9800',
//     '#009688',
//     '#795548',
//   ];
//   const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };
//   let intervalId = null;
//   function disableStartBtn (){
//     startBtn.setAttribute("disabled", "disabled")
//   };
//   function enableStartBtn (){
//     startBtn.removeAttribute("disabled")
//   }
//   function startSwitchColors () {
//       intervalId = setInterval(() => {
// const colorId =randomIntegerFromInterval(0,colors.length);
// body.style.backgroundColor = colors[colorId];
// disableStartBtn
//       }, 1000);
//   }
//   function stopSwitchColors () {
//   clearInterval(intervalId);
//   enableStartBtn
//   }
//   startBtn.addEventListener('click', startSwitchColors);
//   stopBtn.addEventListener('click', stopSwitchColors);