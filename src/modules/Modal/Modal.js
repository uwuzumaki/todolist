//Creates the modal for adding both projects and tasks.

import DisplayProjects from "../Sidebar/DisplayProjects";
import DisplayTasks from "../Tasks/DisplayTasks";
import {
  getSavedProjects,
  getSelectedProject,
  getSavedTasks,
  setSavedTasks,
  setSavedProjects,
  toggleModal,
  setSelectedProject,
} from "../Utils/Utils";
import ProjectFactory from "./ProjectFactory";
import TaskFactory from "./TaskFactory";
import moment from "moment";

const modalProject = () => {
  const modal = document.getElementById("modal");

  const addProjectWrapper = document.createElement("div");
  addProjectWrapper.id = "add-project-wrapper";
  modal.appendChild(addProjectWrapper);

  const addProjectNav = document.createElement("div");
  addProjectNav.id = "add-project-nav";
  addProjectWrapper.appendChild(addProjectNav);

  const addProjectNavDesc = document.createElement("h6");
  addProjectNavDesc.id = "add-project-nav-desc";
  addProjectNavDesc.innerHTML = "Add A Project";
  addProjectNav.appendChild(addProjectNavDesc);

  const addProjectClose = document.createElement("div");
  addProjectClose.id = "project-modal-close";
  addProjectClose.classList = "modal-close";
  addProjectClose.textContent = "X";
  //Toggles the modal when the X is pressed
  addProjectClose.addEventListener("click", toggleModal);
  addProjectNav.appendChild(addProjectClose);

  const addProjectTitle = document.createElement("textarea");
  addProjectTitle.placeholder = "Add a project title";
  addProjectTitle.id = "add-project-title";
  addProjectWrapper.appendChild(addProjectTitle);

  const descWrapper = document.createElement("div");
  descWrapper.id = "description-wrapper";
  addProjectWrapper.appendChild(descWrapper);

  const addProjectDescription = document.createElement("textarea");
  addProjectDescription.placeholder = "Add a project description";
  addProjectDescription.id = "add-project-desc";
  descWrapper.appendChild(addProjectDescription);

  const addProjectButtonDiv = document.createElement("div");
  addProjectButtonDiv.id = "add-project-button-container";
  descWrapper.appendChild(addProjectButtonDiv);

  //The button that adds the project. Takes all the information added to the modal and saves it into storage before printing out the information on the project sidebar.
  const addProjectButton = document.createElement("button");
  addProjectButton.classList.add("add-task-button");
  addProjectButton.innerHTML = "Add Project";
  addProjectButton.addEventListener("click", () => {
    const newProject = ProjectFactory(
      addProjectTitle.value,
      addProjectDescription.value
    );
    addProjectTitle.value = "";
    addProjectDescription.value = "";
    const savedProjects = getSavedProjects();
    savedProjects.push(newProject);
    setSavedProjects(savedProjects);
    setSelectedProject(newProject.projectID);
    toggleModal();
    DisplayProjects();
    DisplayTasks();
  });
  addProjectButtonDiv.appendChild(addProjectButton);
};

const modalTask = () => {
  const modal = document.getElementById("modal");

  const addTaskWrapper = document.createElement("div");
  addTaskWrapper.id = "add-task-wrapper";
  modal.appendChild(addTaskWrapper);

  const addTaskNav = document.createElement("div");
  addTaskNav.id = "add-task-nav";
  addTaskWrapper.appendChild(addTaskNav);

  const addTaskNavDesc = document.createElement("h6");
  addTaskNavDesc.id = "add-task-nav-desc";
  addTaskNavDesc.innerHTML = "Add A Task";
  addTaskNav.appendChild(addTaskNavDesc);

  const addTaskClose = document.createElement("div");
  addTaskClose.id = "task-modal-close";
  addTaskClose.classList = "modal-close";
  addTaskClose.textContent = "X";
  //Toggles the modal when the X is pressed
  addTaskClose.addEventListener("click", toggleModal);
  addTaskNav.appendChild(addTaskClose);

  const addTaskTitle = document.createElement("textarea");
  addTaskTitle.id = "add-task-title";
  addTaskTitle.placeholder = "Add a Title";
  addTaskWrapper.appendChild(addTaskTitle);

  const addTaskDescription = document.createElement("textarea");
  addTaskDescription.id = "add-task-desc";
  addTaskDescription.placeholder = "Add a description of the task";
  addTaskWrapper.appendChild(addTaskDescription);

  const addTaskDate = document.createElement("input");
  addTaskDate.id = "add-task-date";
  addTaskDate.type = "date";
  addTaskWrapper.appendChild(addTaskDate);

  const priorityTitle = document.createElement("div");
  priorityTitle.id = "priority-title";
  priorityTitle.textContent = "Priority:";
  addTaskWrapper.appendChild(priorityTitle);

  const addPriorityContainer = document.createElement("div");
  addPriorityContainer.id = "priority-container";
  addTaskWrapper.appendChild(addPriorityContainer);

  let prio = "";

  const lowPrio = document.createElement("button");
  lowPrio.innerHTML = "Low";
  lowPrio.id = "low-priority";
  lowPrio.classList.add("prio-button");
  lowPrio.addEventListener("click", () => {
    prio = "Low";
  });
  addPriorityContainer.appendChild(lowPrio);

  const medPrio = document.createElement("button");
  medPrio.innerHTML = "Medium";
  medPrio.id = "med-priority";
  medPrio.classList.add("prio-button");
  medPrio.addEventListener("click", () => {
    prio = "Medium";
  });
  addPriorityContainer.appendChild(medPrio);

  const highPrio = document.createElement("button");
  highPrio.innerHTML = "High";
  highPrio.id = "high-priority";
  highPrio.classList.add("prio-button");
  highPrio.addEventListener("click", () => {
    prio = "High";
  });
  addPriorityContainer.appendChild(highPrio);

  const addTaskButtonDiv = document.createElement("div");
  addTaskButtonDiv.id = "add-task-button-container";
  addTaskWrapper.appendChild(addTaskButtonDiv);

  //The button that adds the task. Takes all the information added to the modal and saves it into storage before printing out the information on the task page.
  const addTaskButton = document.createElement("button");
  addTaskButton.classList.add("add-task-button");
  addTaskButton.innerHTML = "Add task";
  addTaskButton.addEventListener("click", () => {
    const selectedProject = getSelectedProject();
    const newTask = TaskFactory(
      selectedProject,
      addTaskTitle.value,
      addTaskDescription.value,
      moment(addTaskDate.value),
      prio
    );

    const allTasks = getSavedTasks();
    allTasks.push(newTask);
    setSavedTasks(allTasks);

    addTaskTitle.value = "";
    addTaskDescription.value = "";
    addTaskDate.value = "";
    prio = "";
    toggleModal();
    DisplayTasks();
  });
  addTaskButtonDiv.appendChild(addTaskButton);
};

const Modal = () => {
  const body = document.body;

  const modal = document.createElement("div");
  modal.id = "modal";
  body.appendChild(modal);

  modalProject();
  modalTask();
};

export default Modal;
