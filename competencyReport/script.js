let todoList = [];
var taskInput = document.getElementById("todo");

function addTask(){
    let task = taskInput.value;
    todoList.push(task);
    showTasks();
    taskInput.value = '';
}

function showTasks(){
   let todoListUl = document.getElementById("todoList");
   todoListUl.innerHTML = "";

   let bodyList = "";

   for (let i = 0; i < todoList.length; i++) {
       bodyList += `<li> ${todoList[i]} </li>`; 
   }
   todoListUl.innerHTML = bodyList;
}

function deleteTask(){
    let task = taskInput.value;
    
    for (let i = 0; i < todoList.length; i++) {
        if(todoList[i]==task){  
            todoList.splice(i,1);
            break;
        } 
    }

    showTasks();
    taskInput.value = '';
}