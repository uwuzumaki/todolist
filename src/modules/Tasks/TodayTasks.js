import { getSavedTasks } from "../Utils/Utils";

const TodayTasks = () => {
  const allTasks = getSavedTasks();
  const today = new Date().setHours(0, 0, 0, 0);
  const todayReadable = new Date(today).toDateString();

  for (let i = 0; i < allTasks.length; i++) {
    if (today === allTasks[i].taskDueDate) {
      //create a list for each task that's due today
    }
  }
  console.log(todayReadable);
};

export default TodayTasks;
