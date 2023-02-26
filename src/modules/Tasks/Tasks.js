import DisplayTasks from "./DisplayTasks";

const Tasks = () => {
  const main = document.getElementById("main");

  const tasks = document.createElement("div");
  tasks.id = "tasks";
  main.appendChild(tasks);

  const container = document.createElement("div");
  container.id = "taskContainer";
  tasks.appendChild(container);

  DisplayTasks();
};

export default Tasks;
