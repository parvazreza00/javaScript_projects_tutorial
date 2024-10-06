const timerDisplay = document.getElementById('timer');
const btnStart = document.getElementById('btnStart');
const btnEnd = document.getElementById('btnEnd');

function startTimer(){
    setInterval(() => {
        console.log("hello");
    }, 1000);
}

btnStart.addEventListener('click', ()=>{
    startTimer();
});
btnEnd.addEventListener('click', ()=>{
    console.log("End");
});