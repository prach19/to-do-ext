let inputTask = document.getElementById("input-task");
let taskList = document.getElementById("list");
let list = [];

function addTask(){
    if(inputTask.value === ""){
        alert("Please enter a task");
    }
    else{
        list.push(inputTask);
        inputTask.value="";
    }
}


for(let i = 0; i < list.length; i++){
    let li = document.createElement("li");
    li.innerHTML = list[i];
    taskList.appendChild(li);
}