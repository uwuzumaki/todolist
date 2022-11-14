const ProjectFactory = (projectName, projectDesc) => {
  const projectID = Math.floor(Math.random() * 10000);
  const tasks = [];
  return { projectID, projectName, projectDesc, tasks };
};

export default ProjectFactory;
