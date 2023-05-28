import { getSavedTasks } from "../Utils/Utils";
import moment from "moment";
import ToggleDescription from "./ToggleDescription";

//Creates all the tasks due today
const UpcomingTasks = () => {
  const allTasks = getSavedTasks();
  const today = moment();
  const future = moment().add(7, "days"); //Specifies how many days into the future upcoming task shows
  const parent = document.getElementById("taskContainer");

  for (let i = 0; i < allTasks.length; i++) {
    const dueDate = moment(allTasks[i].taskDueDate);
    if (
      today.valueOf() < dueDate.valueOf() &&
      dueDate.valueOf() < future.valueOf()
    ) {
      const task = allTasks[i];

      const upcomingChildContainer = document.createElement("div");
      upcomingChildContainer.classList = "taskChild";
      parent.appendChild(upcomingChildContainer);

      const childContainer = document.createElement("div");
      childContainer.classList = "taskChildContainer";
      childContainer.addEventListener("click", () =>
        ToggleDescription(task.taskID)
      );
      upcomingChildContainer.appendChild(childContainer);

      const nameContainer = document.createElement("div");
      nameContainer.textContent = "Task: " + allTasks[i].taskName;
      nameContainer.classList = "taskChildChild";
      childContainer.appendChild(nameContainer);

      const dateContainer = document.createElement("div");
      dateContainer.textContent =
        "Due date: " + dueDate.format("dddd MMMM Do YYYY");
      dateContainer.classList = "taskChildChild";
      childContainer.appendChild(dateContainer);

      const prioContainer = document.createElement("div");
      prioContainer.textContent = "Priority: " + allTasks[i].taskPriority;
      prioContainer.classList = "taskChildChild";
      childContainer.appendChild(prioContainer);

      const descContainer = document.createElement("div");
      descContainer.id = `c${task.taskID}`;
      descContainer.classList.add("taskChildDesc");
      descContainer.textContent = "Description: " + task.taskDesc;
      upcomingChildContainer.appendChild(descContainer);
    }
  }
};

export default UpcomingTasks;
