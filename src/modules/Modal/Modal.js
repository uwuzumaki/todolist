import Icon from "../Footer/github-dark.png";

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
  addProjectClose.addEventListener("click", () => {
    modal.style.display === "flex"
      ? (modal.style.display = "none")
      : (modal.style.display = "flex");
  });
  addProjectNav.appendChild(addProjectClose);

  const addProjectTitle = document.createElement("textarea");
  addProjectTitle.id = "add-project-title";
  addProjectWrapper.appendChild(addProjectTitle);

  const addProjectDescription = document.createElement("textarea");
  addProjectDescription.id = "add-project-desc";
  addProjectWrapper.appendChild(addProjectDescription);
};

export default Modal;
