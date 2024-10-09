//increase and decrease button project...........................

const counterElement = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

let counter = 0;

const updateCounter = (value) =>{
    counter = counter + value;

    counterElement.innerText = counter;
    
    //increase button functionality
    if(counter >= 10){
        increaseBtn.setAttribute('disabled', true);
    }else{
        increaseBtn.removeAttribute('disabled', false);
    }

    //decrease button functionality
    if(counter <= 0){
        decreaseBtn.setAttribute('disabled', true);
    }else{
        decreaseBtn.removeAttribute('disabled', false);
    }
}

increaseBtn.addEventListener('click', ()=>{
    updateCounter(1);
});

decreaseBtn.addEventListener('click', ()=>{
    updateCounter(-1);
});

//RGB color Generator project....................................

