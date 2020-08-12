
// const  daysRef = document.querySelector("[data-value=days]");
// const  hoursRef = document.querySelector("[data-value=hours]");
// const  minsRef = document.querySelector("[data-value=mins]");
// const  secondsRef = document.querySelector("[data-value=secs]");

// const timer = {
//     start(){
//         const targetDate = new Date('Jun 27, 2021')
//         setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = targetDate - currentTime;
//             updateClockFace(deltaTime)
//         }, 1000);
//     }
// };
// timer.start();
//  function updateClockFace(time){
// const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
// const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
// const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
// const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
// daysRef.textContent = days;
// hoursRef.textContent = hours;
// minsRef.textContent = mins;
// secondsRef.textContent = secs;
//  }
//  function pad(value){
//       return String(value).padStart(2, '0');
//  }

//  timer.start();