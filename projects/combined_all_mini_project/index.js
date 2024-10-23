//increase and decrease button project...........................

const counterElement = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

let counter = 0;

const updateCounter = (value) => {
  counter = counter + value;

  counterElement.innerText = counter;

  //increase button functionality
  if (counter >= 10) {
    increaseBtn.setAttribute("disabled", true);
  } else {
    increaseBtn.removeAttribute("disabled", false);
  }

  //decrease button functionality
  if (counter <= 0) {
    decreaseBtn.setAttribute("disabled", true);
  } else {
    decreaseBtn.removeAttribute("disabled", false);
  }
};

increaseBtn.addEventListener("click", () => {
  updateCounter(1);
});

decreaseBtn.addEventListener("click", () => {
  updateCounter(-1);
});

//RGB color Generator project....................................

const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

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
generateBtn.addEventListener("click", () => {
  updateColor();
});

function copyColorCOde() {
  const colorCode = document.getElementById("colorCode");
  const inputTag = document.createElement("input");
  document.body.appendChild(inputTag);
  inputTag.value = colorCode.innerText;

  inputTag.select();
  document.execCommand("copy");
  document.body.removeChild(inputTag);
  alert("color copied to clipboard: " + inputTag.value);
}
copyBtn.addEventListener("click", () => {
  copyColorCOde();
});

// mindfull breathing timer.....................
let leftTime;
let timerInterval;
let isRunning = false;
const timerDiv = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const endBtn = document.getElementById("endBtn");

const startTimer = (duration) => {
  let timer = duration;
  timerInterval = setInterval(() => {
    const minutes = parseInt(timer / 60, 10);
    const seconds = parseInt(timer % 60, 10);

    const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    const displaySeconds = seconds < 10 ? "0" + seconds : seconds;
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
};

startBtn.addEventListener("click", () => {
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

endBtn.addEventListener("click", () => {
  timerStop();
  isRunning = false;
});

//extract text from image..........................
function ExtractText() {
  const inputImage = document.getElementById("inputImage");
  const showText = document.getElementById("showText");

  const imageFile = inputImage.files[0];
  if (imageFile) {
    // text image convert into text only
    Tesseract.recognize(imageFile, "eng")
      .then(({ data }) => {
        showText.textContent = data.text;
      })
      .catch((error) => {
        console.error("Error", error);
        showText.textContent = error;
      });
  } else {
    showText.innerHTML =
      "<p class='text-danger'>Please insert an image file.</p>";
  }
}

//to do list -.....................................
const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const checkedRemove = document.getElementById("checkedRemove");
const checkAllContainer = document.querySelector(".ToDoList div");
const checkAll = document.getElementById("checkall");
let taskCount = 0;

addTask.addEventListener("click", () => {
  const inputValue = taskInput.value;

  if (inputValue) {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.style.marginTop = "8px";
    li.style.listStyleType = "none";
    li.innerHTML =
      `<input type="checkbox" style="width: 15px;height: 15px;margin-right:5px;">` +
      inputValue +
      `<button class="ms-3 btn btn-danger btn-sm" onclick="removeLi(this)">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = "";

    taskCount++;

    if (taskCount === 1) {
      checkAllContainer.style.display = "block";
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
    checkAllContainer.style.display = "none";
    checkAll.checked = false;
  }
}

checkedRemove.addEventListener("click", () => {
  const allChecked = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  allChecked.forEach((allItem) => {
    const li = allItem.parentNode;
    li.parentNode.removeChild(li);
    taskCount--;
  });

  if (taskCount === 0) {
    checkAllContainer.style.display = "none";
    checkAll.checked = false;
  }
});

// Functionality for the "Checked all" checkbox
checkAll.addEventListener("change", () => {
  const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
  allCheckboxes.forEach((checkbox) => {
    if (checkbox !== checkAll) {
      checkbox.checked = checkAll.checked;
    }
  });
});

// weather app-..................................................
const weatherBtn = document.getElementById("getWeather");
weatherBtn.addEventListener("click", () => {
  const weatherInfo = document.getElementById("weatherInfo");
  weatherInfo.style.marginTop = "10px";
  weatherInfo.style.padding = "10px";
  weatherInfo.style.width = "250px";
  weatherInfo.style.margin = "auto";
  weatherInfo.style.background =
    "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)";

  const city = document.getElementById("city").value;
  const apiKey = "a2121d797ac86c8832c578704c8c7107";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error("No country or city found!");
      }
      return res.json();
    })
    .then((data) => {
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
    })
    .catch((error) => {
      console.log("Opps, Sorry!", error);
      weatherInfo.innerHTML = `<p class="text-white">No country or city found!</p>`;
    });
});

//password generator.......................................................
const generatePassBtn = document.getElementById("generatePassword");
generatePassBtn.addEventListener("click", () => {
  const showPassword = document.getElementById("showPassword");
  const inputLength = document.getElementById("passwordLength").value;

  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&()_-+=/{}[]?<>";

  let randomPassword = "";
  for (let i = 0; i < inputLength; i++) {
    const passIndex = Math.round(Math.random() * charset.length);
    randomPassword += charset[passIndex];
  }

  showPassword.innerText = "Password : " + randomPassword;
});

// tips calculator.......................................................
const tipsCalculateBtn = document.getElementById("tipsCalculate");
tipsCalculateBtn.addEventListener("click", () => {
  const billAmountValue = parseFloat(
    document.getElementById("billAmount").value
  );
  const tipsPercentValue = parseFloat(
    document.getElementById("tipsPercentage").value
  );

  if (isNaN(billAmountValue) || isNaN(tipsPercentValue)) {
    document.getElementById("result").innerHTML =
      '<p class="text-danger">Please Enter Valid Number!</p>';
    return;
  }

  const tipsPerAmount = (tipsPercentValue * billAmountValue) / 100;
  const totalBill = billAmountValue + tipsPerAmount;

  document.getElementById("result").innerHTML = `
        <p> Tips Amount : $${tipsPerAmount.toFixed(2)}</p>
        <p> Total Amount : $${totalBill.toFixed(2)}</p>
   `;
  //    console.log(totalBill);
});

// slider image project ................................

let slideIndex = 0;

const slideShow = (index) => {
  const allSlide = document.getElementById("allSlide");

  const totalSlides = allSlide.children.length;

  if (index >= totalSlides) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = totalSlides - 1;
  } else {
    slideIndex = index;
  }

  allSlide.style.transform = `translateX(${-slideIndex * 100}%)`;
};

const nextSlide = () => {
  slideShow(slideIndex + 1);
};

const prevSlide = () => {
  slideShow(slideIndex - 1);
};

// bmi claculator............................................................

const BMIButton = document.getElementById("CalculateBMI");
const BMIresult = document.getElementById("bmiresult");

BMIButton.addEventListener("click", () => {
  const bmiage = parseInt(document.getElementById("bmiage").value);
  const bmiweight = document.getElementById("bmiweight").value;
  const bmiheight = document.getElementById("bmiheight").value / 100;

  if (isNaN(bmiage) || bmiage <= 0) {
    BMIresult.innerHTML = `<p class="text-danger">Please Enter Valid Age</p>`;
    return;
  }
  if (
    isNaN(bmiheight) ||
    bmiweight <= 0 ||
    isNaN(bmiheight) ||
    bmiheight === 0
  ) {
    BMIresult.innerHTML = `<p class="text-danger">Please Enter Valid Weight and Height</p>`;
    return;
  }

  const BMICategory = (bmi) => {
    if (bmi < 16) {
      return "Severely Underweight";
    } else if (bmi >= 16.0 && bmi <= 18.4) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      return "Overweight";
    } else if (bmi >= 30.0 && bmi <= 34.9) {
      return "Moderately Obese";
    } else if (bmi >= 35.0 && bmi <= 39.9) {
      return "Severely Obese";
    } else {
      return "Morbidly Obese";
    }
  };

  const bmi = bmiweight / (bmiheight * bmiheight);
  const getBMIValue = BMICategory(bmi);

  BMIresult.innerHTML = `
        <p>Your Age : ${bmiage} years</p>
        <p>Your BMI : ${bmi.toFixed(1)} kg/cm<sup>2</sup></p>
        <p>Your Are : ${getBMIValue}</p>
    `;

  document.getElementById("clearButton").addEventListener("click", function () {
    BMIresult.innerHTML = "";
    document.getElementById("bmiage").value = "";
    document.getElementById("bmiweight").value = "";
    document.getElementById("bmiheight").value = "";
  });
});

// recipie app................................
const recipieResultDiv = document.getElementById("recipieResult");
const recipiBtn = document.getElementById("recipiBtn");

recipiBtn.addEventListener("click", () => {
  recipieResultDiv.style.height = '400px';
  recipieResultDiv.style.overflowY = 'scroll';
  recipieResultDiv.style.border = '1px solid #ccc';
  recipieInputValue = document.getElementById("inputRecipie").value;
  // console.log(recipieInputValue);

  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipieInputValue}`
  )
    .then((res) => {
      if(!res.ok){
        throw new Error("Recipe Name Not Found!")
      }
      return res.json();
    })
    .then((data) => {
      console.log(data.meals);
      const recipies = data.meals;
      if (recipies) {
        recipies.forEach((recipie) => {
          const recipieDiv = document.createElement("div");
       
          recipieDiv.innerHTML = `
                    <h1>${recipie.strMeal}</h1>
                    <div class="py-1">
                             <span>Country: <b>${recipie.strArea}</b></span>|
                            <span>Category: <b>${recipie.strCategory}</b></span>
                        </div>
                    <img src="${recipie.strMealThumb}" style="width:300px;height:200px;" class="img-thumbnail rounded mx-auto d-block" alt="IMAGE"/>
                    <div class="py-1">
                        <a href="${recipie.strSource}" target="_blank">Source</a>  |
                        <a href="${recipie.strYoutube}" target="_blank">Youtube </a> 
                    </div>
                   <div style="width:95%; margin:auto;">
                        <p class="text-start">Recipie Tags : ${recipie.strTags}</p>    
                        <p style="text-align: justify">${recipie.strInstructions}</p>
                   </div>
                `;
          recipieResultDiv.appendChild(recipieDiv);
          document.getElementById("inputRecipie").value = '';
        });
      } else {
        recipieResultDiv.innerHTML = `<p class="text-danger">Recipe Name Not Found</p>`;
      }
    })
  .catch((error) => {
    console.log("Opps, Sorry!", error);
    recipieResultDiv.innerHTML = `<p class="text-danger">Recipe Name Not Found</p>`;
  });
});

// typing speed test..................................................

document.addEventListener('DOMContentLoaded', ()=>{

  const quotes = [
            "A journey of a thousand miles begins with a single step.",
            "To be or not to be, that is the question.",
            "All that glitters is not gold.",
            "The quick brown fox jumps over the lazy dog.",
            "The only thing we have to fear is fear itself.",
            "Little learning is a dangerous things.",
          ];

        const displayQuote = document.getElementById('quote');  
        const inputBox = document.getElementById('inputBox');  
        const typeBtn = document.getElementById('typeBtn');  
        const resultDiv = document.getElementById('resultDiv');  

        let currentQuate;
        let startTime;

        typeBtn.addEventListener('click', startTypeBtn);
        inputBox.addEventListener('input', checkInput);

        function startTypeBtn(){

          const randomIndex = Math.floor(Math.random() * quotes.length);
          currentQuate = quotes[randomIndex];
          displayQuote.textContent = currentQuate;
          inputBox.removeAttribute('disabled');
          inputBox.focus();

          startTime = new Date().getTime();

          inputBox.value = '';
          resultDiv.textContent = '';

        }

        function checkInput(){
          const typedText = inputBox.value;
          if(typedText === currentQuate){
            const endTime = new Date().getTime();
            const timeTaken = (endTime - startTime) / 1000;
            const wordsPerMin = (typedText.split(' ').length) / timeTaken * 60;
            inputBox.setAttribute('disabled', true);

            resultDiv.textContent = `You typing speed ${parseInt(wordsPerMin)} words per minute.`;

          }
        }


});
