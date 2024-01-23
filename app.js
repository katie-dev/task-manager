const taskForm= document.getElementById("task-form");
const taskList= document.getElementById("task-list");

let taskCount = 1;

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskInput = document.getElementById("input-text");
    const inputText = taskInput.value.trim();

    //console.log(inputText)

    if(inputText!=='') {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.textContent = `${taskCount}. ${inputText}`;

        taskList.appendChild(taskItem);

        taskCount++;
        taskInput.value = "";
    }
});
    