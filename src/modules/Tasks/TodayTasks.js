import { getSavedTasks } from "../Utils/Utils";
import moment from "moment";

const TodayTasks = () => {
  const allTasks = getSavedTasks();
  const today = moment();
  //.format("dddd MMMM Do YYYY");
  console.log(today);

  for (let i = 0; i < allTasks.length; i++) {
    if (today === allTasks[i].taskDueDate) {
      //create a list for each task that's due today
    }
  }
};

export default TodayTasks;
