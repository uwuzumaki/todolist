import { toggleModal } from "../Utils/Utils";

const Tasks = () => {
  const main = document.getElementById("main");

  const tasks = document.createElement("div");
  tasks.id = "tasks";
  main.appendChild(tasks);

  const addTaskButton = document.createElement("button");
  addTaskButton.id = "add-task-button";
  addTaskButton.innerHTML = "Add A Task";
  addTaskButton.addEventListener("click", () => toggleModal("task"));
  tasks.appendChild(addTaskButton);
};

export default Tasks;
