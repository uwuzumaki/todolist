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
  addProjectButton.addEventListener("click", () => {
    console.log("123");
  });
  projectWrapper.appendChild(addProjectButton);

  const projectContainer = document.createElement("div");
  projectContainer.id = "project-container";
  sidebar.appendChild(projectContainer);
};

export default Sidebar;
