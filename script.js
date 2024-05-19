const BUTTON = document.querySelector(".button-add-task")
const INPUT = document.querySelector(".input-task")
const LIST = document.querySelector('.task-list')

let taskList = []

function addNewTask() {
    if (INPUT.value == 0){
        return 0;
    }
    taskList.push({
        task: INPUT.value,
        status: false
    })
    INPUT.value = ''
    showTasks();
}

function showTasks() {

    let newLi = ''

    taskList.forEach((tarefa, index)=> {
        newLi = newLi + `
        <li class="task ${tarefa.status && "done"}">
            <img src="./img/checked.png" alt="checked-image" onclick="taskDone(${index})">
            <p>${tarefa.task}</p>
            <img src="./img/trash.png" alt="trash-image" onclick="deleteTask(${index})">
        </li>
        `
    })

    console.log('HTML Gerado:', newLi);

    LIST.innerHTML = newLi
j
    localStorage.setItem('task', JSON.stringify(taskList))
}

function taskDone(index) {
    taskList[index].status = !taskList[index].status
    showTasks()
}

function deleteTask(index) {
    taskList.splice(index, 1)
    showTasks()
}

document.addEventListener('DOMContentLoaded', () => {
    reloadTask();
});

BUTTON.addEventListener('click', addNewTask)
