const TaskFactory = (taskName, taskDesc, taskDueDate, taskPriority) => {
  const taskID = Math.floor(Math.random() * 10000);
  return { taskID, taskName, taskDesc, taskDueDate, taskPriority };
};

export default TaskFactory;
