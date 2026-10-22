"use strict";
// Task 8: only a temporary array; no database or localStorage.
let tasks = [];
let nextTaskId = 1;
const taskForm = document.getElementById("todo-form");
const titleInput = document.getElementById("task-title");
const descriptionInput = document.getElementById("task-description");
const taskList = document.getElementById("todo-list");
const feedback = document.getElementById("todo-feedback");

function updateTaskCount() {
  const completed = tasks.filter(function (task) { return task.completed; }).length;
  document.getElementById("task-count").textContent = completed + " of " + tasks.length + " complete";
  document.getElementById("todo-empty").hidden = tasks.length > 0;
}
function renderTasks() {
  taskList.replaceChildren();
  tasks.forEach(function (task) {
    const item = document.createElement("li");
    item.className = "todo-item";
    item.classList.toggle("completed", task.completed);
    const row = document.createElement("div");
    row.className = "todo-row";
    const label = document.createElement("label");
    label.className = "todo-label";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function () {
      task.completed = checkbox.checked;
      item.classList.toggle("completed", task.completed);
      updateTaskCount();
    });
    const title = document.createElement("span");
    // textContent displays user input as text, never as HTML.
    title.textContent = task.title;
    label.append(checkbox, title);
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", "Delete task: " + task.title);
    deleteButton.addEventListener("click", function () {
      tasks = tasks.filter(function (existingTask) { return existingTask.id !== task.id; });
      renderTasks();
      feedback.classList.remove("error");
      feedback.textContent = "Task deleted.";
      titleInput.focus();
    });
    row.append(label, deleteButton);
    item.appendChild(row);
    if (task.description) {
      const description = document.createElement("p");
      description.textContent = task.description;
      item.appendChild(description);
    }
    taskList.appendChild(item);
  });
  updateTaskCount();
}
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = titleInput.value.trim();
  feedback.classList.remove("error");
  titleInput.removeAttribute("aria-invalid");
  if (!title) {
    feedback.textContent = "Please enter a task title.";
    feedback.classList.add("error");
    titleInput.setAttribute("aria-invalid", "true");
    titleInput.focus();
    return;
  }
  tasks.push({ id: nextTaskId, title: title, description: descriptionInput.value.trim(), completed: false });
  nextTaskId += 1;
  renderTasks();
  taskForm.reset();
  feedback.textContent = "Task added.";
  titleInput.focus();
});
renderTasks();
