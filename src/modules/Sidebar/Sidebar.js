import { setLocalStorage, toggleModal } from "../Utils/Utils";

const Sidebar = () => {
  const main = document.getElementById("main");

  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  main.appendChild(sidebar);

  const todayWrapper = document.createElement("div");
  todayWrapper.id = "today-wrapper";
  sidebar.appendChild(todayWrapper);

  const today = document.createElement("h4");
  today.id = "today";
  today.innerHTML = "Today";
  todayWrapper.appendChild(today);

  const upcomingWrapper = document.createElement("div");
  upcomingWrapper.id = "upcoming-wrapper";
  sidebar.appendChild(upcomingWrapper);

  const upcoming = document.createElement("h4");
  upcoming.id = "upcoming";
  upcoming.innerHTML = "Upcoming";
  upcomingWrapper.appendChild(upcoming);

  const projectWrapper = document.createElement("div");
  projectWrapper.id = "project-wrapper";
  sidebar.appendChild(projectWrapper);

  const project = document.createElement("h4");
  project.id = "project";
  project.innerHTML = "Project";
  projectWrapper.appendChild(project);

  const addProjectButton = document.createElement("button");
  addProjectButton.id = "add-project-button";
  addProjectButton.innerHTML = "+";
  addProjectButton.addEventListener("click", toggleModal);
  projectWrapper.appendChild(addProjectButton);

  const projectContainer = document.createElement("div");
  projectContainer.id = "project-container";
  sidebar.appendChild(projectContainer);

  const b1 = document.createElement("button");
  b1.innerHTML = "list entries";
  b1.addEventListener("click", () => {
    console.log(Object.entries(localStorage));
  });
  projectContainer.appendChild(b1);

  const b2 = document.createElement("button");
  b2.innerHTML = "delete all entries";
  b2.addEventListener("click", () => {
    localStorage.clear();
  });
  projectContainer.appendChild(b2);
};

export default Sidebar;
