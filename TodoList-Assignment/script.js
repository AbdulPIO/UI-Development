// document.addEventListener("DOMContentLoaded", loadTasks); // ensuring JS runs only after the page loads and loads stored tasks automatically

// Alternate method to load content first before JS gets introduced

// using window.onload 
window.onload = function () { // runs loadTasks after the entire page including styles is loaded, unlike DOMContentLoaded it waits for all assets to finish loading, this might introduce a slight delay
    loadTasks();
};

// We can use and IIFE - runs immediately
// (function () {
//     loadTasks();
// })();

// using setTimeout 
// setTimeout(loadTasks, 0); // schedules loadTasks() to run after 0 milliseconds.

let editIndex = null; // declaring a global varibale to store the index of task being edited

// Adding a task
function addTask() {
    let taskInput = document.getElementById("taskInput").value.trim();
    if (taskInput === "") {
        alert("Task cannot be empty!");
        return;
    }

    let tasks = getTasksFromStorage();
    tasks.push({ text: taskInput, completed: false });
    saveTasksToStorage(tasks);
    renderTasks();
    document.getElementById("taskInput").value = ""; // to clear input field after adding a new task
}

// Adding a task by pressing enter key
document.getElementById("taskInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") { // checks if the key pressed is Enter
        event.preventDefault(); // prevent default submission behavior like submitting a from when pressing enter
        let taskInput = document.getElementById("taskInput").value.trim();
        if (taskInput === "") {
            alert("Task Cannot be empty!");
            return;
        }
        addTask(); // if input is not empty addTask function is called
    }
});


// marking a task as completed
function toggleTask(index) { // triggered when checkbox is clicked
    let tasks = getTasksFromStorage();
    tasks[index].completed = !tasks[index].completed; // if completed was false, it becomes true and vice versa
    saveTasksToStorage(tasks);
    renderTasks();
}

// deleting a task
function deleteTask(index) {
    let tasks = getTasksFromStorage();

    // Adding a confirmation before deleting a task
    let confirmDelete = confirm(`Are you sure you want to delete the task : "${tasks[index].text}"?`);

    if (confirmDelete) {
        tasks.splice(index, 1); // removing one task at the specified index, index - position to be removed, 1 - one task to delete
        saveTasksToStorage(tasks);
        renderTasks();
    }
}

// opening edit modal
function editTask(index) {
    editIndex = index; // storing index of task being edited
    let tasks = getTasksFromStorage();
    document.getElementById("editInput").value = tasks[index].text; // finding input filed inside editModal and setting its value to the text being edited to see and modify the existing task
    document.getElementById("editModal").style.display = "block"; // making the editModal visible
}

// saving editted tasks
function saveEdit() {
    let tasks = getTasksFromStorage();
    let newTaskText = document.getElementById("editInput").value.trim();// finding input field inside editModal and retrieve edited task text entered by user

    if (newTaskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    tasks[editIndex].text = newTaskText; // updating the task's text with newTaskText after locating the correct task 
    saveTasksToStorage(tasks);
    closeModal();
    renderTasks();
}

// Close Edit Modal
function closeModal() {
    document.getElementById("editModal").style.display = "none"; // setting the display property of editModal to none
}

// filtering tasks
function filterTasks(filterType) {
    renderTasks(filterType); //passing filterType as argument of filter which is set to "all" as default in renderTasks() function
}

// displaying tasks dynamically 
function renderTasks(filter = "all") { // if no argument passed show all tasks
    let tasks = getTasksFromStorage(); // getting tasks and storing it in tasks variable
    let taskList = document.getElementById("taskList"); // retrieving <ul> where tasks will be displayed
    taskList.innerHTML = "";// clearing existing tasks from the list before rendering new ones

    tasks.forEach((task, index) => {
        if (filter === "completed" && !task.completed) return; // if filter is completed skip tasks that are not completed
        if (filter === "pending" && task.completed) return; // if filter is pending skip tasks that are already completed

        taskList.innerHTML += `<li class="${task.completed ? "completed" : ""}">
        <input type="checkbox" onChange="toggleTask(${index})" ${task.completed ? "checked" : ""} />
        <span>${task.text}</span>
        <button class="editButton" onclick="editTask(${index})">Edit</button>
        <button class="deleteButton" onclick="deleteTask(${index})">Delete</button>
        </li>
        `;
    });
}


// Getting tasks from sessionStorage
// Modifying getTasksFromStorage to handle mismatched data
function getTasksFromStorage() {
    // return JSON.parse(sessionStorage.getItem("tasks")) || []; // empty array used as a fallback if no tasks are stored
    try {
        let tasks = JSON.parse(sessionStorage.getItem("tasks"));

        // Ensuring tasks is an array
        if (!Array.isArray(tasks)) throw new Error("Invalid Data Format");

        //Validating Each task object
        for (let task of tasks) {
            if (typeof task.text !== "string" || typeof task.completed !== "boolean") {
                throw new Error("Data Type Mismatch");
            }
        }
        return tasks; // returning valid tasks
    } catch (error) {
        console.warn("Data mismatch! Resetting Tasks.");
        sessionStorage.setItem("tasks", JSON.stringify([]));
        return []; // returning an empty list on error
    }
}

// Saving tasks to sessionStorage
function saveTasksToStorage(tasks) {
    sessionStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks when page refreshes
function loadTasks() {
    renderTasks();
}