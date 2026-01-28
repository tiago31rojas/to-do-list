window.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");
  const themeToggle = document.getElementById("theme-toggle");

  loadTasks();
  loadTheme();

  addTaskButton.addEventListener("click", addTask);

  taskInput.addEventListener("keydown", e => {
    if (e.key === "Enter") addTask();
  });

  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const dark = document.documentElement.classList.contains("dark");
    themeToggle.textContent = dark ? "☀️" : "🌙";
    localStorage.setItem("theme", dark ? "dark" : "light");
    document.body.classList.toggle("dark");
  });

  function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    createTask(text, false);
    saveTasks();
    taskInput.value = "";

    if (navigator.vibrate) navigator.vibrate(20);
  }

  function createTask(text, completed) {
    const li = document.createElement("li");
    if (completed) li.classList.add("done");

    const span = document.createElement("span");
    span.textContent = text;

    const btn = document.createElement("button");
    btn.textContent = "✕";

    btn.onclick = e => {
      e.stopPropagation();
      li.remove();
      saveTasks();
      if (navigator.vibrate) navigator.vibrate(30);
    };

    li.onclick = () => {
      li.classList.toggle("done");
      saveTasks();
      if (navigator.vibrate) navigator.vibrate(15);
    };

    li.append(span, btn);
    taskList.appendChild(li);
  }

  function saveTasks() {
    const data = [];
    document.querySelectorAll("#task-list li").forEach(li => {
      data.push({
        text: li.querySelector("span").textContent,
        done: li.classList.contains("done")
      });
    });
    localStorage.setItem("tasks", JSON.stringify(data));
  }

  function loadTasks() {
    const data = JSON.parse(localStorage.getItem("tasks")) || [];
    data.forEach(t => createTask(t.text, t.done));
  }

  function loadTheme() {
    const t = localStorage.getItem("theme");
    if (t === "dark") {
      document.documentElement.classList.add("dark");
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙";
    }
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
  }
});
