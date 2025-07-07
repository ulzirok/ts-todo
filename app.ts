
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [];

const form = document.getElementById("form") as HTMLFormElement;
const input = document.getElementById("taskInput") as HTMLInputElement;
const list = document.getElementById("taskList") as HTMLUListElement;

function renderTasks(): void {
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    // Заголовок задачи
    const taskText = document.createElement("span");
    taskText.textContent = task.title;
    if (task.completed) {
      taskText.style.textDecoration = "line-through";
    }
    taskText.style.cursor = "pointer";
    taskText.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    // Кнопка удаления
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      renderTasks();
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}


form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const newTask: Task = {
    id: Date.now(),
    title: input.value,
    completed: false,
  };

  tasks.push(newTask);
  input.value = "";
  renderTasks();
});
