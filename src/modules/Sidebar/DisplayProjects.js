import DisplayTasks from "../Tasks/DisplayTasks";
import { getSavedProjects, setSelectedProject } from "../Utils/Utils";
import RemoveProject from "./RemoveProject";

const DisplayProjects = () => {
  const elements = document.getElementsByClassName("project-container-child");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }

  const projects = getSavedProjects();
  const container = document.getElementById("project-container");

  for (let i = 0; i < projects.length; i++) {
    const childContainer = document.createElement("div");
    childContainer.id = `container${i}`;
    childContainer.classList = "project-container-child";
    const setCurrentProject = () => {
      setSelectedProject(projects[i].projectID);
      DisplayTasks();
    };
    childContainer.addEventListener("click", setCurrentProject);
    container.appendChild(childContainer);

    const title = document.createElement("h6");
    title.innerHTML = projects[i].projectName;
    childContainer.appendChild(title);

    const remove = document.createElement("button");
    remove.innerHTML = "x";
    remove.addEventListener("click", (e) => {
      e.stopPropagation();
      RemoveProject(i);
    });
    childContainer.appendChild(remove);
  }
};

export default DisplayProjects;
