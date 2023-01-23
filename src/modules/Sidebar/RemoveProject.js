import { getSavedProjects, setSavedProjects } from "../Utils/Utils";
import DisplayProjects from "./DisplayProjects";

const RemoveProject = (index) => {
  const container = document.getElementById(`container${index}`);
  console.log(container);
  container.remove();
  let getProjects = getSavedProjects();
  getProjects.splice(index, 1);
  setSavedProjects(getProjects);
  DisplayProjects();
};

export default RemoveProject;
