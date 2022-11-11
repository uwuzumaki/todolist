import Icon from "../Footer/github-dark.png";
import DisplayProjects from "../Sidebar/DisplayProjects";
import { getLocalStorage, setLocalStorage, toggleModal } from "../Utils/Utils";
import ProjectFactory from "./ProjectFactory";

const Modal = () => {
  const body = document.body;

  const modal = document.createElement("div");
  modal.id = "modal";
  body.appendChild(modal);

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
  addProjectClose.id = "modal-close";
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

export default Modal;
