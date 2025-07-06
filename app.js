
var tasks = [];

var form = document.getElementById("form");
var input = document.getElementById("taskInput");
var list = document.getElementById("taskList");

function renderTasks() {
    list.innerHTML = "";
    tasks.forEach(function (task) {
        var li = document.createElement("li");
        li.textContent = task.title;
        if (task.completed) {
            li.style.textDecoration = "line-through";
        }
        li.addEventListener("click", function () {
            task.completed = !task.completed;
            renderTasks();
        });
        list.appendChild(li);
    });
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var newTask = {
        id: Date.now(),
        title: input.value,
        completed: false,
    };
    tasks.push(newTask);
    input.value = "";
    renderTasks();
});
