const toggleModal = () => {
  const modal = document.getElementById("modal");
  modal.style.display === "flex"
    ? (modal.style.display = "none")
    : (modal.style.display = "flex");
};

const getLocalStorage = () => {
  const storage = JSON.parse(localStorage.getItem("savedProjects") || "[]");
  return storage;
};

const setLocalStorage = (array) => {
  localStorage.savedProjects = JSON.stringify(array);
};

export { toggleModal, getLocalStorage, setLocalStorage };
