
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
    li.textContent = task.title;
    if (task.completed) {
      li.style.textDecoration = "line-through";
    }

    li.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

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
