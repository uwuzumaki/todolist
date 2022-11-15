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

const getLocalStorage = () => {
  const storage = JSON.parse(localStorage.getItem("savedProjects") || "[]");
  return storage;
};

const setLocalStorage = (array) => {
  localStorage.savedProjects = JSON.stringify(array);
};

export { toggleModal, getLocalStorage, setLocalStorage };
