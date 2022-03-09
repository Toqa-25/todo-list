
// const variables
let inputTask = document.getElementById("input-field"),
    plusButton = document.getElementById("plus"),
    toDoContent = document.querySelector(".todo"),
    completeContent = document.querySelector(".complet"),
    taskText = document.querySelector(".todo-list-text"),
    numberOfTasks = document.querySelector(".tasks-number"),
    numberOfCompletedTasks = document.querySelector(".completed-tasks-number"),
    todoChevron = document.querySelector(".todo-chevron"),
    completeChevron = document.querySelector(".complete-chevron"),
    deleteAllTasks = document.querySelector(".delet-all-tasks"),
    deleteAllCompletedTasks = document.querySelector(".delet-all-completed-tasks");
 
// var variables
var checkedSpan = [...document.querySelectorAll(".todo-list-checked")];
var checkedClasses = [...document.querySelectorAll(".checked")];
var buttonSgroup = [...document.querySelectorAll(".delete")];
let todoList = JSON.parse(localStorage.getItem("tasks"))
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
let completeList = JSON.parse(localStorage.getItem("completedTasks"))
  ? JSON.parse(localStorage.getItem("completedTasks"))
  : [];
/********************************************************** */
if ( todoList.length >= 1) {
    numberOfTasks.innerHTML = todoList.length;
}
else{
    numberOfTasks.innerHTML = 0;
}

if (completeList && completeList.length >= 1) {
  numberOfCompletedTasks.innerHTML = completeList.length;
} else {
  numberOfCompletedTasks.innerHTML = 0;
}
/********************************************************** */
window.onload = function () {
    inputTask.focus()
}
plusButton.onclick = addTask;
inputTask.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    addTask();
  }
});
/************************************* */
// 1- add task
function addTask() {
  if (inputTask.value != null && inputTask.value != "") {
      if (todoList.includes(inputTask.value.trim())) {
          swal("This Task is  Already Exists.");
      }
          toDoContent.innerHTML += `  <div class="todo-list-task-group">
                                        <div class="todo-list-task doing-task">
                                            <p class="todo-list-text">${inputTask.value.trim()}</p>
                                            <span id="todo-list-doing" class="todo-list-checked"></span>
                                        </div>
                                        <button class="btn delete">delete</button>
                                    </div>`;
          todoList = [...todoList, inputTask.value.trim()];
          localStorage.setItem("tasks", JSON.stringify(todoList));
          inputTask.value = "";
          currentTasks(toDoContent, todoList);
          checkedSpan = [];
          checkedSpan = [...document.querySelectorAll(".todo-list-checked")];
          checkedTask(checkedSpan);
          buttonSgroup = [];
          buttonSgroup = [...document.querySelectorAll(".delete")];
          deleteUneededTask(buttonSgroup);
          numberOfTasks.innerHTML.innerHTML++;
          inputTask.focus();
      
  }
  else {
      swal("Enter Your Task");
  }
}

// 2- drow new tasks
function currentTasks(plceContent, tasksArray) {
  plceContent.innerHTML = "";
  for (i = 0; i < tasksArray.length; i++) {
    plceContent.innerHTML += `<div class="todo-list-task-group">
                <div class="todo-list-task doing-task">
                <p class="todo-list-text">${tasksArray[i]}</p>
                <span id="todo-list-doing" class="todo-list-checked"></span>
                </div>
                <button class="btn delete">delete</button>
                </div>`;
  }
  checkedSpan = [];
  checkedSpan = [...document.querySelectorAll(".todo-list-checked")];
  checkedTask(checkedSpan);
//   console.log("current", checkedSpan);
  buttonSgroup = [];
  buttonSgroup = [...document.querySelectorAll(".delete")];
    deleteUneededTask(buttonSgroup);
       numberOfTasks.innerHTML = "";
       numberOfTasks.innerHTML = todoList.length;
}
currentTasks(toDoContent, todoList);

// 3- drow new tasks
function currentCheckedTasks(plceContent, tasksArray) {
  plceContent.innerHTML = "";
  for (i = 0; i < tasksArray.length; i++) {
    plceContent.innerHTML += `<div class="todo-list-task-group ">
                <div class="todo-list-task doing-task completed-task">
                <p class="todo-list-text">${tasksArray[i]}</p>
                <span id="todo-list-doing" class="todo-list-checked checked"><i class="fas fa-check"></i></span>
                </div>
                <button class="btn delete">delete</button>
                </div>`;
  }
  checkedClasses = [];
  checkedClasses = [...document.querySelectorAll(".checked")];
  unCheckedTask(checkedClasses);
  buttonSgroup = [];
  buttonSgroup = [...document.querySelectorAll(".delete")];
    deleteUneededTask(buttonSgroup);
        numberOfCompletedTasks.innerHTML = "";
        numberOfCompletedTasks.innerHTML = completeList.length;
}
currentCheckedTasks(completeContent, completeList);

// 4- drow completed tasks

function checkedTask(checkBoxs) {
  checkBoxs.forEach((checkBox) => {
    checkBox.onclick = function addChecked(checkBox) {
      deleteTask(checkBox.currentTarget);
      transformTask(checkBox.currentTarget);
    };
  });
}
checkedTask(checkedSpan);

//5- drow uncompleted Tasks
function unCheckedTask(checkBoxs) {
  checkBoxs.forEach((checkBox) => {
    checkBox.onclick = function addChecked(checkBox) {
      deleteTask(checkBox.currentTarget);
        transformTask(checkBox.currentTarget);
    };
  });
}
unCheckedTask(checkedClasses);

// 6- delete tasks
/************************************* */
function deleteTask(current) {
  let currentParent = current.parentElement,
    element = currentParent.parentElement,
    elementFirstParent = element.firstElementChild,
    elementText = elementFirstParent.firstElementChild.innerHTML;
    if (elementFirstParent.classList.contains("completed-task")) {
        completeList.splice(completeList.indexOf(elementText), 1);
        localStorage.setItem("completedTasks", JSON.stringify(completeList));
        numberOfCompletedTasks.innerHTML = ""
        numberOfCompletedTasks.innerHTML = completeList.length
        
} else {
    todoList.splice(todoList.indexOf(elementText), 1);
    localStorage.setItem("tasks", JSON.stringify(todoList));
    numberOfTasks.innerHTML = ""
    numberOfTasks.innerHTML = todoList.length
}
element.remove();
console.log(element);
console.log(elementText);
}

function transformTask(current) {
  let currentParent = current.parentElement,
    element = currentParent.parentElement,
    elementFirstParent = element.firstElementChild,
    elementText = elementFirstParent.firstElementChild.innerHTML;
  if (elementFirstParent.classList.contains("completed-task")) {
    todoList = [...todoList, elementText];
    localStorage.setItem("tasks", JSON.stringify(todoList));
    currentTasks(toDoContent, todoList);
  } else {
    // completeList.push(elementText);
        completeList = [...completeList, elementText];
    localStorage.setItem("completedTasks", JSON.stringify(completeList));
    currentCheckedTasks(completeContent, completeList);
  }
}

function deleteUneededTask(checkBoxs) {
  checkBoxs.forEach((checkBox) => {
    checkBox.onclick = function addChecked(checkBox) {
      let element = checkBox.currentTarget.parentElement,
        elementFirstParent = element.firstElementChild,
        elementText = elementFirstParent.firstElementChild.innerHTML;

      element.remove();
      if (elementFirstParent.classList.contains("completed-task")) {
        completeList.splice(completeList.indexOf(elementText), 1);
          localStorage.setItem("completedTasks", JSON.stringify(completeList));
              numberOfCompletedTasks.innerHTML = "";
              numberOfCompletedTasks.innerHTML = completeList.length;
      } else {
        todoList.splice(todoList.indexOf(elementText), 1);
        localStorage.setItem("tasks", JSON.stringify(todoList));
           numberOfTasks.innerHTML = "";
           numberOfTasks.innerHTML = todoList.length;
      }
      console.log(elementText);
      console.log(elementFirstParent);
      console.log(element);
    };
  });
}
deleteUneededTask(buttonSgroup);


todoChevron.onclick = function (){
    toDoContent.classList.toggle("show")
}
completeChevron.onclick = function () {
  completeContent.classList.toggle("show")
};

deleteAllTasks.onclick = function () {
    toDoContent.innerHTML = ""
    todoList = [];
    localStorage.setItem("tasks", JSON.stringify(todoList));
    currentTasks(toDoContent, todoList);
}
deleteAllCompletedTasks.onclick = function () {
  toDoContent.innerHTML = "";
  completeList = [];
  localStorage.setItem("completedTasks", JSON.stringify(completeList));
  currentCheckedTasks(completeContent, completeList);
};

