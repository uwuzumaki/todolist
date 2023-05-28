//Displays all the tasks for today, upcoming, and projects

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
import ToggleDescription from "./ToggleDescription";

const DisplayTasks = () => {
  const parent = document.getElementById("taskContainer");
  parent.textContent = "";

  //Gets the current project, all projects, and all tasks
  const currentProject = getSelectedProject();
  const savedProjects = getSavedProjects();
  const savedTasks = getSavedTasks();

  if (
    currentProject === "today" ||
    currentProject === "upcoming" ||
    currentProject === ""
  ) {
    //Populates all tasks due today if the current project is blank or today
    if (currentProject === "today" || currentProject === "") {
      const projDesc = document.createElement("div");
      projDesc.textContent = "Tasks due today";
      projDesc.id = "today-tasks";
      projDesc.classList.add("project-desc");
      parent.appendChild(projDesc);

      TodayTasks();
    } else {
      //Populates all tasks due in the next 2 weeks if the current project is upcomming
      const projDesc = document.createElement("div");
      projDesc.textContent = "Upcoming tasks";
      projDesc.id = "upcoming-tasks";
      projDesc.classList.add("project-desc");
      parent.appendChild(projDesc);

      UpcomingTasks();
    }
  } else {
    //Creates the task button to add tasks for the current project
    const addTaskButton = document.createElement("button");
    addTaskButton.id = "add-task-button";
    addTaskButton.innerHTML = "Add A Task";
    //Toggles modal if button is pressed
    addTaskButton.addEventListener("click", () => toggleModal("task"));
    parent.appendChild(addTaskButton);

    for (let i = 0; i < savedProjects.length; i++) {
      if (currentProject === savedProjects[i].projectID) {
        //Creates Project name space with project description
        const proj = savedProjects[i];

        const projName = document.createElement("div");
        projName.id = "project-name";
        projName.textContent = "Project name: " + proj.projectName;
        parent.appendChild(projName);

        const projDesc = document.createElement("div");
        projDesc.id = "project-desc";
        projDesc.textContent = "Project description: " + proj.projectDesc;
        parent.appendChild(projDesc);

        //Populates the tasks for each project
        for (let j = 0; j < savedTasks.length; j++) {
          const task = savedTasks[j];
          if (proj.projectID === task.projectID) {
            const child = document.createElement("div");
            //Toggles the description when you click on the task
            child.addEventListener("click", () =>
              ToggleDescription(task.taskID)
            );
            child.classList = "taskChild";
            child.id = `${task.taskID}`;
            parent.appendChild(child);

            const childContainer = document.createElement("div");
            childContainer.classList = "taskChildContainer";
            child.appendChild(childContainer);

            const name = task.taskName;
            const desc = task.taskDesc;
            //using moment to get a human readable date
            const dueDate = moment(task.taskDueDate).format(
              "dddd MMMM Do YYYY"
            );
            const prio = task.taskPriority;

            const nameContainer = document.createElement("div");
            nameContainer.classList.add("taskChildChild");
            nameContainer.textContent = "Task: " + name;
            childContainer.appendChild(nameContainer);

            const dateContainer = document.createElement("div");
            dateContainer.classList.add("taskChildChild");
            dateContainer.id = "taskChildDueDate";
            dateContainer.textContent = "Due Date: " + dueDate;
            childContainer.appendChild(dateContainer);

            const prioContainer = document.createElement("div");
            prioContainer.classList.add("taskChildChild");
            prioContainer.textContent = "Priority: " + prio;
            childContainer.appendChild(prioContainer);

            //Button to delete the task
            const deleteTask = document.createElement("button");
            deleteTask.classList.add("removeTaskButton");
            deleteTask.addEventListener("click", (e) => {
              e.stopPropagation();
              RemoveTasks(task.taskID);
            });
            deleteTask.textContent = "X";
            childContainer.appendChild(deleteTask);

            //Expanding container that shows the description of the task
            const descContainer = document.createElement("div");
            descContainer.id = `c${task.taskID}`;
            descContainer.classList.add("taskChildDesc");
            descContainer.textContent = "Description: " + desc;
            child.appendChild(descContainer);
          }
        }
      }
    }
  }
};

export default DisplayTasks;
