import DisplayTasks from "../Tasks/DisplayTasks";
import { toggleModal, setSelectedProject } from "../Utils/Utils";
import DisplayProjects from "./DisplayProjects";

const Sidebar = () => {
  const main = document.getElementById("main");

  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  main.appendChild(sidebar);

  const todayWrapper = document.createElement("div");
  todayWrapper.id = "today-wrapper";
  todayWrapper.classList.add("pressable-button");
  todayWrapper.classList.add("sidebarOptionWrapper");
  sidebar.appendChild(todayWrapper);

  const today = document.createElement("div");
  today.id = "today";
  today.innerHTML = "Today";
  today.addEventListener("click", () => {
    setSelectedProject("today");
    DisplayTasks();
  });
  todayWrapper.appendChild(today);

  const upcomingWrapper = document.createElement("div");
  upcomingWrapper.id = "upcoming-wrapper";
  upcomingWrapper.classList.add("pressable-button");
  upcomingWrapper.classList.add("sidebarOptionWrapper");
  sidebar.appendChild(upcomingWrapper);

  const upcoming = document.createElement("div");
  upcoming.id = "upcoming";
  upcoming.innerHTML = "Upcoming";
  upcoming.addEventListener("click", () => {
    setSelectedProject("upcoming");
    DisplayTasks();
  });
  upcomingWrapper.appendChild(upcoming);

  const projectWrapper = document.createElement("div");
  projectWrapper.id = "project-wrapper";
  sidebar.appendChild(projectWrapper);

  const project = document.createElement("div");
  project.id = "project";
  project.innerHTML = "Projects";
  projectWrapper.appendChild(project);

  const addProjectButton = document.createElement("button");
  addProjectButton.id = "add-project-button";
  addProjectButton.innerHTML = "+";
  addProjectButton.addEventListener("click", () => toggleModal("project"));
  projectWrapper.appendChild(addProjectButton);

  const projectContainer = document.createElement("div");
  projectContainer.id = "project-container";
  sidebar.appendChild(projectContainer);

  // const b2 = document.createElement("button");
  // b2.innerHTML = "delete all entries";
  // b2.addEventListener("click", () => {
  //   localStorage.clear();
  // });
  // projectContainer.appendChild(b2);

  DisplayProjects();
};

export default Sidebar;
