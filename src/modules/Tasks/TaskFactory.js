const TaskFactory = (taskTitle, taskDesc, taskDueDate, taskPriority) => {
  const taskID = Math.floor(Math.random() * 10000);
  return { taskID, taskTitle, taskDesc, taskDueDate, taskPriority };
};

export default TaskFactory;
