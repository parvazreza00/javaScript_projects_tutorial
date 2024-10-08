const imageInput = document.getElementById('imageInput');
const extractBtn = document.getElementById('extractText');
const outputDiv = document.getElementById('output');

extractBtn.addEventListener('click', ()=>{
    const imageFiles = imageInput.files[0];
    if(!imageFiles){
        outputDiv.textContent = "Please Insert an Image file.";
        return;
    }

    Tesseract.recognize(
        imageFiles, 'eng'
    ).then(({data})=>{
        outputDiv.textContent = data.text;
    }).catch((error) => {
        console.error('Error', error);
        outputDiv.textContent = error;
    })
});