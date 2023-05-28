import { getSavedTasks } from "../Utils/Utils";
import moment from "moment";

//Creates all of the tasks due today
const TodayTasks = () => {
  const allTasks = getSavedTasks();
  const today = moment();
  const parent = document.getElementById("taskContainer");

  for (let i = 0; i < allTasks.length; i++) {
    const dueDate = moment(allTasks[i].taskDueDate);
    if (
      today.format("dddd MMMM Do YYYY") === dueDate.format("dddd MMMM Do YYYY")
    ) {
      const childContainer = document.createElement("div");
      childContainer.classList = "taskChildContainer";
      parent.appendChild(childContainer);

      const nameContainer = document.createElement("div");
      nameContainer.textContent = "Task: " + allTasks[i].taskName;
      nameContainer.classList = "taskChildChild";
      childContainer.appendChild(nameContainer);

      const taskDesc = document.createElement("div");
      taskDesc.textContent = allTasks[i].taskdesc;
      childContainer.appendChild(taskDesc);

      const dateContainer = document.createElement("div");
      dateContainer.textContent =
        "Due Date " + dueDate.format("dddd MMMM Do YYYY");
      dateContainer.classList = "taskChildChild";
      childContainer.appendChild(dateContainer);

      const prioContainer = document.createElement("div");
      prioContainer.textContent = "Priority: " + allTasks[i].taskPriority;
      prioContainer.classList = "taskChildChild";
      childContainer.appendChild(prioContainer);
    }
  }
};

export default TodayTasks;
