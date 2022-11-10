const ProjectFactory = (projectName) => {
  const projectID = Math.floor(Math.random() * 100);
  return { projectID, projectName };
};

export default ProjectFactory;
