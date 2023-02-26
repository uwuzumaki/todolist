import { allTasks, getSavedProjects, getSelectedProject } from "../Utils/Utils";
import RemoveTasks from "./RemoveTasks";

const DisplayTasks = () => {
  const parent = document.getElementById("taskContainer");
  parent.textContent = "";

  const currentProject = getSelectedProject();
  const savedProjects = getSavedProjects();
  console.log(allTasks());

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
    for (let i = 0; i < savedProjects.length; i++) {
      if (currentProject === savedProjects[i].projectID) {
        const proj = savedProjects[i];

        const projName = document.createElement("h1");
        projName.textContent = proj.projectName;
        parent.appendChild(projName);

        const projDesc = document.createElement("h3");
        projDesc.textContent = proj.projectDesc;
        parent.appendChild(projDesc);

        for (let j = 0; j < savedProjects[i].tasks.length; j++) {
          const task = savedProjects[i].tasks[j];

          const child = document.createElement("div");
          child.classList = "taskChild";
          child.id = `project${i}task${j}`;
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
            RemoveTasks(i, j);
          });
          deleteTask.textContent = "X";
          child.appendChild(deleteTask);
        }
      }
    }
  }
};

export default DisplayTasks;
