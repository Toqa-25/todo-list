// const variables
let inputTask = document.getElementById("input-field"),
  plusButton = document.getElementById("plus"),
  toDoContent = document.querySelector(".todo"),
  completeContent = document.querySelector(".complet"),
  taskText = document.querySelector(".todo-list-text");
// var variables
let checkedSpan = [...document.querySelectorAll(".todo-list-checked")];
let checkedClasses = [...document.querySelectorAll(".checked")];
let buttonSgroup = [...document.querySelectorAll(".delete")];
// local variables
let todoList = JSON.parse(localStorage.getItem("tasks"))
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
let completeList = JSON.parse(localStorage.getItem("completedTasks"))
  ? JSON.parse(localStorage.getItem("completedTasks"))
  : [];
/********************************************************** */
 plusButton.onclick = addTask;
 inputTask.addEventListener("keyup", function (event) {
   // Number 13 is the "Enter" key on the keyboard
   if (event.keyCode === 13) {
     addTask();
   }
 });
/************************************* */
// 1- add task
//    function addTask() {
//  if (inputTask.value != null && inputTask.value != "") {
//    toDoContent.innerHTML += `   <div class="todo-list-task-group">
//               <div class="todo-list-task doing-task">
//                   <p class="todo-list-text">${inputTask.value}</p>
//                   <span id="todo-list-doing" class="todo-list-checked"></span>
//               </div>
//               <button class="btn delete">delete</button>
//           </div>`;
//    todoList = [...todoList, inputTask.value];
//    localStorage.setItem("tasks", JSON.stringify(todoList));
//    inputTask.value = "";
//    currentTasks();
//    deleteDoingTask = []
//      deleteDoingTask = Array.from(document.querySelectorAll(".delete"));
//      deleteTask();
//      checked = []
//      checked = Array.from(document.querySelectorAll(".todo-list-checked"));
//      checkedTask();
//  }
// } 

 // 2- drow new tasks
    // function currentTasks() {
    //     toDoContent.innerHTML = ""
    //     for (i = 0; i < todoList.length ; i++){
    //         toDoContent.innerHTML += `<div class="todo-list-task-group">
    //         <div class="todo-list-task doing-task">
    //         <p class="todo-list-text">${todoList[i]}</p>
    //         <span id="todo-list-doing" class="todo-list-checked"></span>
    //         </div>
    //         <button class="btn delete">delete</button>
    //         </div>`;
    //     }
    // //   deleteDoingTask = []
    // //   deleteDoingTask = Array.from(document.querySelectorAll(".delete"));
    // //   deleteTask();
    // //   checked = []
    // //   checked = Array.from(document.querySelectorAll(".todo-list-checked"));
    // //   checkedTask();
    // } currentTasks()

//  let deleteDoingTask = Array.from(document.querySelectorAll(".delete"));
//  let checked = Array.from(document.querySelectorAll(".todo-list-checked"));

// 3- checked completed task
    // function checkedTask() {
    // checked.forEach(checkedTask => {
    //     checkedTask.onclick = function (checkedTask) {
    //         checkedTask.currentTarget.innerHTML = `<i class="fas fa-check"></i>`;
    //         let childTask = checkedTask.currentTarget.parentElement,
    //           childTaskTest = childTask.firstElementChild.innerHTML,
    //           parentTask = childTask.parentElement,
    //           deletedTaskIndex = todoList.indexOf(parentTask);
    //         parentTask.remove()
    //         todoList.splice(deletedTaskIndex, 1);
    //         localStorage.setItem("tasks", JSON.stringify(todoList));
    //         completeContent.innerHTML += `<div class="todo-list-task-group">
    //           <div class="todo-list-task completed-task">
    //                <p class="todo-list-text">${childTaskTest}</p>
    //                <span id="todo-list-doing" class="todo-list-checked checked"><i class="fas fa-check"></i></span>
    //            </div>
    //            <button class="btn delete" id="delete-complete">delete</button>
    //        </div>`;
        
    //         completeList = [...completeList, childTaskTest];
    //        localStorage.setItem("completedTasks" , JSON.stringify(completeList));
    //         completedTasks();  
    //     };
    // })
    // }checkedTask();

// 4- delete unneeded tasks from doing
    // function deleteTask() {
    //     deleteDoingTask.forEach((deleteButton) => {
    //         deleteButton.onclick = function (deleteButton) {
    //             let parentTask = deleteButton.currentTarget.parentElement,
    //             firstChild = parentTask.firstElementChild,
    //             firstChildText = firstChild.firstElementChild.innerHTML,
    //             deletedTaskIndex = todoList.indexOf(firstChildText);
    //             parentTask.remove();
    //             todoList.splice(deletedTaskIndex, 1);
    //             localStorage.setItem("tasks", JSON.stringify(todoList));
    //         };
    //     });
    // }deleteTask();
    
// let unChecked = Array.from(document.querySelectorAll(".checked"));
 // 5- drow completed tasks

// function completedTasks() {
//     completeContent.innerHTML = ""
//     for (i = 0; i < completeList.length; i++){
//       completeContent.innerHTML += `<div class="todo-list-task-group">
//               <div class="todo-list-task completed-task">
//                    <p class="todo-list-text">${completeList[i]}</p>
//                    <span id="todo-list-doing" class="todo-list-checked checked"><i class="fas fa-check"></i></span>
//                </div>
//                <button class="btn delete" id="delete-complete">delete</button>
//            </div>`;
//       unChecked = [];
//       unChecked = Array.from(document.querySelectorAll(".checked"));
//       unCheckedTask();
//         deleteDoingTask = []
//         deleteDoingTask = Array.from(document.querySelectorAll(".delete"));
//         deleteTask();
//     }
// } completedTasks();

 // 6- unChecked Completed task
// function unCheckedTask(){
//     unChecked.forEach(unCheckedTask => {
//         unCheckedTask.onclick = function (unCheckedTask) {
//             unCheckedTask.currentTarget.innerHTML = " "
//             let childunCheckedTask = unCheckedTask.currentTarget.parentElement,
//               childUnCheckedTaskText =
//                 childunCheckedTask.firstElementChild.innerHTML,
//               parentUnCheckedTask = childunCheckedTask.parentElement,
//               deletedUnCheckedTaskIndex = completeList.indexOf(parentUnCheckedTask);

//             parentUnCheckedTask.remove();
//             completeList.splice(deletedUnCheckedTaskIndex, 1);
//             localStorage.setItem(
//               "completedTasks",
//               JSON.stringify(completeList)
//             );

//             toDoContent.innerHTML += `<div class="todo-list-task-group">
//               <div class="todo-list-task completed-task">
//                    <p class="todo-list-text">${childUnCheckedTaskText}</p>
//                    <span id="todo-list-doing" class="todo-list-checked "></span>
//                </div>
//                <button class="btn delete" id="delete-complete">delete</button>
//            </div>`;
            
//             todoList = [...todoList, childUnCheckedTaskText];
//             localStorage.setItem("tasks", JSON.stringify(todoList));
//             currentTasks();
//         }
//         })
// }unCheckedTask();

// 7- delete unneeded tasks from doing
    // function deleteUnCheckedTask() {
    //   deleteDoingTask.forEach((deleteButton) => {
    //     deleteButton.onclick = function (deleteButton) {
    //       let parentTask = deleteButton.currentTarget.parentElement,
    //         firstChild = parentTask.firstElementChild,
    //         firstChildText = firstChild.firstElementChild.innerHTML,
    //         deletedTaskIndex = completeList.indexOf(firstChildText);
    //       parentTask.remove();
    //       completeList.splice(deletedTaskIndex, 1);
    //       localStorage.setItem("completedTasks", JSON.stringify(completeList));
    //     };
    //   });
    // }deleteUnCheckedTask();


/***************************** */  