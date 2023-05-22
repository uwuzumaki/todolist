import moment from "moment";
import {
  getSavedProjects,
  getSavedTasks,
  getSelectedProject,
  toggleModal,
} from "../Utils/Utils";
import RemoveTasks from "./RemoveTasks";
import TodayTasks from "./TodayTasks";
import UpcomingTasks from "./UpcomingTasks";

const DisplayTasks = () => {
  const parent = document.getElementById("taskContainer");
  parent.textContent = "";

  const currentProject = getSelectedProject();
  const savedProjects = getSavedProjects();
  const savedTasks = getSavedTasks();

  if (
    currentProject === "today" ||
    currentProject === "upcoming" ||
    currentProject === ""
  ) {
    if (currentProject === "today" || currentProject === "") {
      const projName = document.createElement("div");
      projName.textContent = "Today";
      parent.appendChild(projName);

      const projDesc = document.createElement("div");
      projDesc.textContent = "Tasks due today";
      parent.appendChild(projDesc);

      TodayTasks();
    } else {
      const projName = document.createElement("div");
      projName.textContent = "Upcoming";
      parent.appendChild(projName);

      const projDesc = document.createElement("div");
      projDesc.textContent = "Upcoming tasks";
      parent.appendChild(projDesc);

      UpcomingTasks();
    }
  } else {
    //Add task button
    const addTaskButton = document.createElement("button");
    addTaskButton.id = "add-task-button";
    addTaskButton.innerHTML = "Add A Task";
    addTaskButton.addEventListener("click", () => toggleModal("task"));
    parent.appendChild(addTaskButton);

    for (let i = 0; i < savedProjects.length; i++) {
      if (currentProject === savedProjects[i].projectID) {
        const proj = savedProjects[i];

        const projName = document.createElement("div");
        projName.id = "project-name";
        projName.textContent = "Project name: " + proj.projectName;
        parent.appendChild(projName);

        const projDesc = document.createElement("div");
        projDesc.id = "project-desc";
        projDesc.textContent = "Project description: " + proj.projectDesc;
        parent.appendChild(projDesc);

        for (let j = 0; j < savedTasks.length; j++) {
          const task = savedTasks[j];
          if (proj.projectID === task.projectID) {
            const child = document.createElement("div");
            child.addEventListener("click", () => console.log("weow"));
            child.classList = "taskChild";
            child.id = `${task.taskID}`;
            parent.appendChild(child);

            const name = task.taskName;
            const desc = task.taskDesc;
            const dueDate = moment(task.taskDueDate).format(
              "dddd MMMM Do YYYY"
            );
            const prio = task.taskPriority;

            const nameContainer = document.createElement("div");
            nameContainer.classList.add("taskChildChild");
            nameContainer.textContent = "Task: " + name;
            child.appendChild(nameContainer);

            const descContainer = document.createElement("div");
            descContainer.classList.add("taskChildChild");
            descContainer.textContent = "Description: " + desc;
            child.appendChild(descContainer);

            const dateContainer = document.createElement("div");
            dateContainer.classList.add("taskChildChild");
            dateContainer.textContent = "Due Date: " + dueDate;
            child.appendChild(dateContainer);

            const prioContainer = document.createElement("div");
            prioContainer.classList.add("taskChildChild");
            prioContainer.textContent = "Priority: " + prio;
            child.appendChild(prioContainer);

            const deleteTask = document.createElement("button");
            deleteTask.classList.add("removeTaskButton");
            deleteTask.addEventListener("click", (e) => {
              e.stopPropagation();
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
