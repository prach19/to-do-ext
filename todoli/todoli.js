let inputTask = document.getElementById("input-task");
let taskList = document.getElementById("list");

function addTask(){
    if(inputTask.value === ""){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = list[i];
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
    }
    inputTask.value="";
}

taskList.addEventListener("click", function(input){
    if(input.target.tagName == "LI"){
        input.target.classList.toggle("checked");
    }
    else if(input.target.tagName == "SPAN"){
        input.target.parentElement.remove();
    }
}, false);

