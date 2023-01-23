const DisplayTasks = () => {
  const parent = document.getElementById("tasks");

  const container = document.createElement("div");
  container.id = "taskContainer";
  parent.appendChild(container);
};

export default DisplayTasks;
