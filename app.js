var tasks = [];
var form = document.getElementById("form");
var input = document.getElementById("taskInput");
var list = document.getElementById("taskList");
function renderTasks() {
    list.innerHTML = "";
    tasks.forEach(function (task) {
        var li = document.createElement("li");
        // Заголовок задачи
        var taskText = document.createElement("span");
        taskText.textContent = task.title;
        if (task.completed) {
            taskText.style.textDecoration = "line-through";
        }
        taskText.style.cursor = "pointer";
        taskText.addEventListener("click", function () {
            task.completed = !task.completed;
            renderTasks();
        });
        // Кнопка удаления
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.addEventListener("click", function () {
            tasks = tasks.filter(function (t) { return t.id !== task.id; });
            renderTasks();
        });
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
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
