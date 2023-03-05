import { getSavedTasks } from "../Utils/Utils";
import moment from "moment";

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
      childContainer.classList = "taskChild";
      parent.appendChild(childContainer);

      const nameContainer = document.createElement("div");
      nameContainer.textContent = allTasks[i].taskName;
      childContainer.appendChild(nameContainer);

      const taskDesc = document.createElement("div");
      taskDesc.textContent = allTasks[i].taskdesc;
      childContainer.appendChild(taskDesc);

      const dateContainer = document.createElement("div");
      dateContainer.textContent = dueDate.format("dddd MMMM Do YYYY");
      childContainer.appendChild(dateContainer);

      const prioContainer = document.createElement("div");
      prioContainer.textContent = allTasks[i].taskPriority;
      childContainer.appendChild(prioContainer);
    }
  }
};

export default TodayTasks;
