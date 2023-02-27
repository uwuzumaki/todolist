import { getSavedTasks } from "../Utils/Utils";

const UpcomingTasks = () => {
  const allTasks = getSavedTasks();
  const today = new Date();
  const todayReadable = new Date(today).toDateString();
  const thisWeek = new Date().setDate(today.getDate() + 7);

  for (let i = 0; i < allTasks.length; i++) {
    if (today === allTasks[i].taskDueDate) {
      //create a list for each task that's due this week/in 2 weeks
    }
  }
  console.log(new Date(thisWeek).toDateString());
};

export default UpcomingTasks;
