import {
  getSavedProjects,
  getSavedTasks,
  getSelectedProject,
  toggleModal,
} from "../Utils/Utils";
import RemoveTasks from "./RemoveTasks";

const DisplayTasks = () => {
  const parent = document.getElementById("taskContainer");
  parent.textContent = "";

  const currentProject = getSelectedProject();
  console.log(currentProject, typeof currentProject);
  const savedProjects = getSavedProjects();
  const savedTasks = getSavedTasks();

  if (
    currentProject === "today" ||
    currentProject === "upcoming" ||
    currentProject === ""
  ) {
    if (currentProject === "today" || currentProject === "") {
      const projName = document.createElement("h1");
      projName.textContent = "Today";
      parent.appendChild(projName);

      const projDesc = document.createElement("h3");
      projDesc.textContent = "Tasks due today";
      parent.appendChild(projDesc);
    } else {
      const projName = document.createElement("h1");
      projName.textContent = "Upcoming";
      parent.appendChild(projName);

      const projDesc = document.createElement("h3");
      projDesc.textContent = "Upcoming tasks";
      parent.appendChild(projDesc);
    }
  } else {
    const addTaskButton = document.createElement("button");
    addTaskButton.id = "add-task-button";
    addTaskButton.innerHTML = "Add A Task";
    addTaskButton.addEventListener("click", () => toggleModal("task"));
    parent.appendChild(addTaskButton);
    for (let i = 0; i < savedProjects.length; i++) {
      if (currentProject === savedProjects[i].projectID) {
        const proj = savedProjects[i];

        const projName = document.createElement("h1");
        projName.textContent = proj.projectName;
        parent.appendChild(projName);

        const projDesc = document.createElement("h3");
        projDesc.textContent = proj.projectDesc;
        parent.appendChild(projDesc);

        for (let j = 0; j < savedTasks.length; j++) {
          const task = savedTasks[j];
          if (proj.projectID === task.projectID) {
            const child = document.createElement("div");
            child.classList = "taskChild";
            child.id = `${task.taskID}`;
            parent.appendChild(child);

            const name = task.taskName;
            const desc = task.taskDesc;
            const dueDate = task.taskDueDate;
            const prio = task.taskPriority;

            const nameContainer = document.createElement("div");
            nameContainer.textContent = name;
            child.appendChild(nameContainer);

            const descContainer = document.createElement("div");
            descContainer.textContent = desc;
            child.appendChild(descContainer);

            const dateContainer = document.createElement("div");
            dateContainer.textContent = dueDate;
            child.appendChild(dateContainer);

            const prioContainer = document.createElement("div");
            prioContainer.textContent = prio;
            child.appendChild(prioContainer);

            const deleteTask = document.createElement("button");
            deleteTask.addEventListener("click", () => {
              RemoveTasks(task.taskID);
            });
            deleteTask.textContent = "X";
            child.appendChild(deleteTask);
          }
        }
      }
    }
  }
};

export default DisplayTasks;
