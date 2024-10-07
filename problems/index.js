const endTime = document.getElementById("endTime");
const startTime = document.getElementById("startTime");
let timerId;

startTime.addEventListener("click", () => {
  timerId = setTimeout(() => {
    console.log("hello");
    alert("hello");
  }, 3000);
});

endTime.addEventListener("click", () => {
  clearTimeout(timerId);
});

const timer = document.getElementById("timer");
timer.style.fontWeight = 'bold';
setInterval(() => {
  const d = new Date();
  timer.innerHTML = d.toLocaleTimeString();
}, 1000);
