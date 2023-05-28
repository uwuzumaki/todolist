//Toggles the modal based on which button is clicked (task or project) and hides the other one.
const toggleModal = (option) => {
  const modal = document.getElementById("modal");
  const project = document.getElementById("add-project-wrapper");
  const task = document.getElementById("add-task-wrapper");
  modal.style.display === "flex"
    ? (modal.style.display = "none")
    : (modal.style.display = "flex");

  if (option === "project") {
    project.style.display = "flex";
    task.style.display = "none";
  } else if (option === "task") {
    task.style.display = "flex";
    project.style.display = "none";
  }
};

//Gets all saved projects from local storage, otherwise provides an epmty array.
const getSavedProjects = () => {
  const storage = JSON.parse(localStorage.getItem("savedProjects") || "[]");
  return storage;
};

//Sets saved projects into local storage
const setSavedProjects = (array) => {
  localStorage.savedProjects = JSON.stringify(array);
};

//Gets tasks from local storage, otherwise provides an empty array.
const getSavedTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("savedTasks") || "[]");
  return tasks;
};

//Gets saved tasks from local storage
const setSavedTasks = (array) => {
  localStorage.savedTasks = JSON.stringify(array);
};

//Gets the currently selected project
const getSelectedProject = () => {
  const project = sessionStorage.getItem("selectedProject") || "";
  if (project === "today" || project === "upcoming" || project === "") {
    return project;
  } else {
    return parseInt(project);
  }
};

//Sets the currently selected project.
const setSelectedProject = (project) => {
  if (typeof project === "string") {
    sessionStorage.selectedProject = project;
  } else {
    sessionStorage.selectedProject = project.toString();
  }
};

export {
  toggleModal,
  getSavedProjects,
  setSavedProjects,
  getSavedTasks,
  setSavedTasks,
  getSelectedProject,
  setSelectedProject,
};
