import DisplayTasks from "../Tasks/DisplayTasks";
import {
  getSavedProjects,
  setSavedProjects,
  getSavedTasks,
  setSavedTasks,
  getSelectedProject,
  setSelectedProject,
} from "../Utils/Utils";
import DisplayProjects from "./DisplayProjects";

const RemoveProject = (index) => {
  const container = document.getElementById(`container${index}`);
  container.remove();
  let getProjects = getSavedProjects();
  getProjects.splice(index, 1);
  setSavedProjects(getProjects);

  const removedID = getSelectedProject();
  const tasks = getSavedTasks();
  let getTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].projectID != removedID) {
      getTasks.push(tasks[i]);
    }
  }
  setSavedTasks(getTasks);
  DisplayProjects();
  setSelectedProject("");
  DisplayTasks();
};

export default RemoveProject;
