//Function that deletes the project from the left view and

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

//Gets the ID of the project that is clicked.
//Gets a copy of the saved projects.
//Removes the project with the matching ID from the list of saved projects.
//Overrides the old project array with a new one.
const RemoveProject = (index) => {
  const container = document.getElementById(`container${index}`);
  container.remove();
  let getProjects = getSavedProjects();
  getProjects.splice(index, 1);
  setSavedProjects(getProjects);

  //Also removes the tasks with the associated project IDs.
  //Overrides old array with new array that does not have the deleted project IDs.
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
