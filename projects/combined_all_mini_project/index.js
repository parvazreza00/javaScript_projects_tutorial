//increase and decrease button project...........................

const counterElement = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

let counter = 0;

const updateCounter = (value) => {
    counter = counter + value;

    counterElement.innerText = counter;

    //increase button functionality
    if (counter >= 10) {
        increaseBtn.setAttribute('disabled', true);
    } else {
        increaseBtn.removeAttribute('disabled', false);
    }

    //decrease button functionality
    if (counter <= 0) {
        decreaseBtn.setAttribute('disabled', true);
    } else {
        decreaseBtn.removeAttribute('disabled', false);
    }
}

increaseBtn.addEventListener('click', () => {
    updateCounter(1);
});

decreaseBtn.addEventListener('click', () => {
    updateCounter(-1);
});

//RGB color Generator project....................................

const colorBox = document.getElementById('colorBox');
const colorCode = document.getElementById('colorCode');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

function RGBColorGenerator() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function updateColor() {
    const color = RGBColorGenerator();
    colorBox.style.backgroundColor = color;
    colorCode.textContent = color;
}
generateBtn.addEventListener('click', () => {
    updateColor();
});

function copyColorCOde() {
    const colorCode = document.getElementById('colorCode');
    const inputTag = document.createElement('input');
    document.body.appendChild(inputTag);
    inputTag.value = colorCode.innerText;

    inputTag.select();
    document.execCommand('copy');
    document.body.removeChild(inputTag);
    alert("color copied to clipboard: " + inputTag.value);
}
copyBtn.addEventListener('click', () => {
    copyColorCOde()
});

// mindfull breathing timer.....................
let leftTime;
let timerInterval;
let isRunning = false;
const timerDiv = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const endBtn = document.getElementById('endBtn');

const startTimer = (duration) => {
    let timer = duration;
    timerInterval = setInterval(() => {
        const minutes = parseInt(timer / 60, 10);
        const seconds = parseInt(timer % 60, 10);

        const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
        timerDiv.textContent = displayMinutes + ":" + displaySeconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            timerDiv.textContent = "Breath Out";

            setTimeout(() => {
                timerDiv.textContent = "Breath In";
                startTimer(leftTime);
            }, 3000);
        }

    }, 1000);
}

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        leftTime = 90;
        startTimer(leftTime);
        isRunning = true;
    }

});

function timerStop() {
    clearInterval(timerInterval);
    timerDiv.textContent = "Breath In";
    isRunning = false;
}

endBtn.addEventListener('click', () => {
    timerStop();
    isRunning = false;
});

//extract text from image..........................
function ExtractText() {
    const inputImage = document.getElementById('inputImage');
    const showText = document.getElementById('showText');

    const imageFile = inputImage.files[0];
    if (imageFile) {
        // text image convert into text only
        Tesseract.recognize(
            imageFile, 'eng'
        ).then(({
            data
        }) => {
            showText.textContent = data.text;
        }).catch((error) => {
            console.error('Error', error);
            showText.textContent = error;
        })

    } else {
        showText.innerHTML = "<p class='text-danger'>Please insert an image file.</p>";
    }

}

//to do list -.....................................
const taskInput = document.getElementById('taskInput');
const addTask = document.getElementById('addTask');
const checkedRemove = document.getElementById('checkedRemove');
const checkAllContainer = document.querySelector('.ToDoList div');
const checkAll = document.getElementById('checkall');
let taskCount = 0;

addTask.addEventListener('click', () => {
    const inputValue = taskInput.value;

    if (inputValue) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.style.marginTop = '8px';
        li.style.listStyleType = 'none';
        li.innerHTML = `<input type="checkbox" style="width: 15px;height: 15px;margin-right:5px;">` + inputValue + `<button class="ms-3 btn btn-danger btn-sm" onclick="removeLi(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = "";

        taskCount++;

        if (taskCount === 1) {
            checkAllContainer.style.display = 'block';
        }
    } else {
        alert("Please insert your task!");
    }

});

function removeLi(btn) {
    const li = btn.parentNode;
    li.parentNode.removeChild(li);

    taskCount--;

    if (taskCount === 0) {
        checkAllContainer.style.display = 'none';
        checkAll.checked = false;
    }
}

checkedRemove.addEventListener('click', () => {
    const allChecked = document.querySelectorAll("input[type='checkbox']:checked");
    allChecked.forEach((allItem) => {
        const li = allItem.parentNode;
        li.parentNode.removeChild(li);
        taskCount--;
    });

    if (taskCount === 0) {
        checkAllContainer.style.display = 'none';
        checkAll.checked = false;
    }


});

// Functionality for the "Checked all" checkbox
checkAll.addEventListener('change', () => {
    const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
    allCheckboxes.forEach((checkbox) => {
        if (checkbox !== checkAll) {
            checkbox.checked = checkAll.checked;
        }
    });
});


// weather app-..................................................
const weatherBtn = document.getElementById('getWeather');
weatherBtn.addEventListener('click', () => {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.style.marginTop = "10px";
    weatherInfo.style.padding = "10px";
    weatherInfo.style.width = "250px";
    weatherInfo.style.margin = "auto";
    weatherInfo.style.background = "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)";

    const city = document.getElementById('city').value;
    const apiKey = "a2121d797ac86c8832c578704c8c7107";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error('No country or city found!');
            }
            return res.json();
        })
        .then(data => {

            const des = data.weather[0].description;
            const windSpeed = data.wind.speed;
            const humidity = data.main.humidity;
            const temperature = data.main.temp;

            weatherInfo.innerHTML = `
            <p>Country/City Name : <span style="text-transform: capitalize;">${city}</span> </p>
            <p>Description : ${des}</p>
            <p>Temperature : ${temperature} &deg;C</p>
            <p>Humidity : ${humidity}%</p>
            <p>Wind Speed : ${windSpeed} m/s</p>
        `;
        }).catch(error => {
            console.log('Opps, Sorry!', error);
            weatherInfo.innerHTML = `<p class="text-white">No country or city found!</p>`
        })


})

//password generator.......................................................
const generatePassBtn = document.getElementById('generatePassword');
generatePassBtn.addEventListener('click', () => {
    const showPassword = document.getElementById('showPassword');
    const inputLength = document.getElementById('passwordLength').value;

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&()_-+=/{}[]?<>";

    let randomPassword = '';
    for(let i = 0; i < inputLength; i++){
        const passIndex = Math.round(Math.random() * charset.length);
        randomPassword += charset[passIndex];
    }

    showPassword.innerText = "Password : " + randomPassword;

});

// tips calculator.......................................................
const tipsCalculateBtn = document.getElementById('tipsCalculate');
tipsCalculateBtn.addEventListener('click', ()=>{
    const billAmountValue = parseFloat(document.getElementById('billAmount').value);
    const tipsPercentValue = parseFloat(document.getElementById('tipsPercentage').value);

    if(isNaN(billAmountValue) || isNaN(tipsPercentValue)){
        document.getElementById('result').innerHTML = '<p class="text-danger">Please Enter Valid Number!</p>';
        return;
    }

   const tipsPerAmount = (tipsPercentValue*billAmountValue)/100;
   const totalBill = billAmountValue + tipsPerAmount;

   document.getElementById('result').innerHTML = `
        <p> Tips Amount : $${tipsPerAmount.toFixed(2)}</p>
        <p> Total Amount : $${totalBill.toFixed(2)}</p>
   `;
//    console.log(totalBill);

});