import Icon from "../Footer/github-dark.png";
import DisplayProjects from "../Sidebar/DisplayProjects";
import { getLocalStorage, setLocalStorage, toggleModal } from "../Utils/Utils";
import ProjectFactory from "./ProjectFactory";

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

  const addProjectClose = document.createElement("img");
  addProjectClose.id = "project-modal-close";
  addProjectClose.classList = "modal-close";
  addProjectClose.src = Icon;
  addProjectClose.addEventListener("click", toggleModal);
  addProjectNav.appendChild(addProjectClose);

  const addProjectTitle = document.createElement("textarea");
  addProjectTitle.id = "add-project-title";
  addProjectWrapper.appendChild(addProjectTitle);

  const addProjectDescription = document.createElement("textarea");
  addProjectDescription.id = "add-project-desc";
  addProjectWrapper.appendChild(addProjectDescription);

  const addProjectButtonDiv = document.createElement("div");
  addProjectButtonDiv.id = "add-project-button-container";
  addProjectWrapper.appendChild(addProjectButtonDiv);

  const addProjectButton = document.createElement("button");
  addProjectButton.id = "add-project-button";
  addProjectButton.innerHTML = "Add Project";
  addProjectButton.addEventListener("click", () => {
    const newProject = ProjectFactory(
      addProjectTitle.value,
      addProjectDescription.value
    );
    addProjectTitle.value = "";
    addProjectDescription.value = "";
    const savedProjects = getLocalStorage();
    savedProjects.push(newProject);
    setLocalStorage(savedProjects);
    toggleModal();
    DisplayProjects();
  });
  addProjectButtonDiv.appendChild(addProjectButton);
};

const taskProject = () => {
  const modal = document.getElementById("modal");

  const addTaskWrapper = document.createElement("div");
  addTaskWrapper.id = "add-task-wrappper";
  modal.appendChild(addTaskWrapper);

  const addTaskNav = document.createElement("div");
  addTaskNav.id = "add-task-nav";
  addTaskWrapper.appendChild(addTaskNav);

  const addTaskNavDesc = document.createElement("h6");
  addTaskNavDesc.id = "add-task-nav-desc";
  addTaskNavDesc.innerHTML = "Add A Task";
  addTaskNav.appendChild(addTaskNavDesc);

  const addTaskClose = document.createElement("img");
  addTaskClose.id = "task-modal-close";
  addTaskClose.classList = "modal-close";
  addTaskClose.src = Icon;
  addTaskClose.addEventListener("click", toggleModal);
  addTaskNav.appendChild(addTaskClose);

  const addTaskTitle = document.createElement("textarea");
  addTaskTitle.id = "add-task-title";
  addTaskWrapper.appendChild(addTaskTitle);

  const addTaskDescription = document.createElement("textarea");
  addTaskDescription.id = "add-task-desc";
  addTaskWrapper.appendChild(addTaskDescription);

  const addTaskDate = document.createElement("input");
  addTaskDate.id = "add-task-date";
  addTaskDate.type = "date";
  addTaskWrapper.appendChild(addTaskDate);

  const addPriorityContainer = document.createElement("div");
  addPriorityContainer.id = "priority-container";
  addTaskWrapper.appendChild(addPriorityContainer);

  const lowPrio = document.createElement("button");
  lowPrio.innerHTML = "low";
  lowPrio.id = "low-priority";
  addPriorityContainer.appendChild(lowPrio);

  const medPrio = document.createElement("button");
  medPrio.innerHTML = "med";
  medPrio.id = "med-priority";
  addPriorityContainer.appendChild(medPrio);

  const highPrio = document.createElement("button");
  highPrio.innerHTML = "high";
  highPrio.id = "high-priority";
  addPriorityContainer.appendChild(highPrio);

  const addTaskButtonDiv = document.createElement("div");
  addTaskButtonDiv.id = "add-task-button-container";
  addTaskWrapper.appendChild(addTaskButtonDiv);

  const addTaskButton = document.createElement("button");
  addTaskButton.id = "add-task-button";
  addTaskButton.innerHTML = "Add task";
  addTaskButton.addEventListener("click", () => {
    console.log("123");
  });
  addTaskButtonDiv.appendChild(addTaskButton);
};

const Modal = () => {
  const body = document.body;

  const modal = document.createElement("div");
  modal.id = "modal";
  body.appendChild(modal);

  modalProject();
  taskProject();
};

export default Modal;
