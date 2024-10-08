const addTask = document.getElementById("addTask");

addTask.addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  const inputValue = taskInput.value;
  // console.log(inputValue);
  if (inputValue !== "") {
    const taskList = document.getElementById("taskList");
    const taskLi = document.createElement("li");
    taskLi.style.marginTop = "10px";
    taskLi.innerHTML =
      `<input type="checkbox" style="width: 15px;height: 15px;margin-right: 10px;">` +
      inputValue +
      `<button class="btn btn-danger btn-sm ms-2" onclick="itemDelete(this)">Delete</button>`;
    taskList.appendChild(taskLi);
    taskInput.value = " ";
  }else{
    alert('Please insert task input field');
  }
});

const itemDelete = (btn) => {
  const li = btn.parentNode;
  li.parentNode.removeChild(li);
};

const deleteCheckTask = ()=>{
    const checkedItems = document.querySelectorAll('input[type="checkbox"]:checked');
    // console.log(checkedItems);
    if(checkedItems.length > 0){
        checkedItems.forEach(checkedItem =>{
            const li = checkedItem.parentNode;
            li.parentNode.removeChild(li);
        })
    }else{
        console.log("don't checked any item!");
    }
}
