let timeLeft;
let timerInterval;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const btnStart = document.getElementById('btnStart');
const btnEnd = document.getElementById('btnEnd');

function startTimer(duration){
    let timer = duration;

    timerInterval = setInterval(() => {
        const minutes = parseInt(timer / 60 , 10);
        const seconds = parseInt(timer % 60, 10);

        const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        const displaySeconds = seconds < 10 ? '0' + seconds : seconds;

        timerDisplay.textContent = displayMinutes + ":" + displaySeconds;

        if(--timer < 0){
            clearInterval(timerInterval);
            timerDisplay.textContent = 'Breath Out';

            setTimeout(() => {
                timerDisplay.textContent = 'Breath In';
                startTimer(timeLeft);
            }, 3000);
        }
    }, 1000);
}

function timerStop(){
    clearInterval(timerInterval);
    timerDisplay.textContent = 'Breath In';
    isRunning = false;
}

btnStart.addEventListener('click', ()=>{
   if(!isRunning){
    timeLeft = 15;
    startTimer(timeLeft);
    isRunning = true;
   }
});
btnEnd.addEventListener('click', ()=>{
    timerStop();
    isRunning = false;
});