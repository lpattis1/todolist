// Define UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// ----------------------------------------------

// Load all event listeners function called
loadEventListeners();

// Load all event listeners function
function loadEventListeners() {
  // Add task event:
  form.addEventListener("submit", addTask);

  //   Remove task event:
  taskList.addEventListener("click", removeTask);

  //   Clear task event:
  clearBtn.addEventListener("click", clearTasks);

  //   Filter task event:
  filter.addEventListener("keyup", filterTasks);
}

// ----------------------------------------------

// Add task function
function addTask(e) {
  // Prevent default form action
  e.preventDefault();

  //   Check if user has submitted an empty input value
  if (!taskInput.value) {
    alert("Please add a task");
  }

  //   Create a new li element
  const li = document.createElement("li");
  //   Add a class to the li
  li.className = "collection-item";
  //   Create text node
  li.textContent = taskInput.value;

  //   Create a new link element
  const link = document.createElement("a");
  //   Add a class to the link
  link.className = "delete-item secondary-content";
  //   Add icon
  link.innerHTML = `<i class="fas fa-times"></i>`;

  //   Append link to li
  li.appendChild(link);

  //   Append the li to the ul
  taskList.appendChild(li);

  //   Clear input
  taskInput.value = "";
}

// ----------------------------------------------

// Delete tasks individually

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure you want to delete this task?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear all tasks

function clearTasks(e) {
  const tasks = document.querySelectorAll(".collection-item");
  if (confirm("Are you sure you want to remove all tasks?")) {
    tasks.forEach((task) => {
      task.remove();
    });
  }
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  const tasks = document.querySelectorAll(".collection-item");

  tasks.forEach((task) => {
    if (!task.textContent.toLowerCase().match(text)) {
      task.classList.add("hide-task");
    } else {
      task.classList.remove("hide-task");
    }
  });
}
