import { getSavedProjects, setSavedProjects } from "../Utils/Utils";

const RemoveTasks = (projectIndex, taskIndex) => {
  const task = document.getElementById(
    `project${projectIndex}task${taskIndex}`
  );
  task.remove();
  const getProjects = getSavedProjects();
  getProjects[projectIndex].tasks.splice(taskIndex, 1);
  setSavedProjects(getProjects);
};

export default RemoveTasks;
