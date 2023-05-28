//Factory module used to create task objects.

const TaskFactory = (
  projectID,
  taskName,
  taskDesc,
  taskDueDate,
  taskPriority
) => {
  const taskID = Math.floor(Math.random() * 10000);
  return { projectID, taskID, taskName, taskDesc, taskDueDate, taskPriority };
};

export default TaskFactory;
