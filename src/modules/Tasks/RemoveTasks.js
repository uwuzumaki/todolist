import { getSavedTasks, setSavedTasks } from "../Utils/Utils";

const RemoveTasks = (taskID) => {
  const task = document.getElementById(`${taskID}`);
  task.remove();
  const getTasks = getSavedTasks();
  let newTasks = [];
  for (let i = 0; i < getTasks.length; i++) {
    if (getTasks[i].taskID != taskID) {
      newTasks.push(getTasks[i]);
    }
  }
  setSavedTasks(newTasks);
};

export default RemoveTasks;
