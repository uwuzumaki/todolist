import { getLocalStorage, setLocalStorage } from "../Utils/Utils";
import DisplayProjects from "./DisplayProjects";

const RemoveProject = (index) => {
  const container = document.getElementById(`container${index}`);
  console.log(container);
  container.remove();
  let getProjects = getLocalStorage();
  getProjects.splice(index, 1);
  setLocalStorage(getProjects);
  DisplayProjects();
};

export default RemoveProject;
