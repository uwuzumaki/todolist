const ProjectFactory = (projectName, projectDesc) => {
  const projectID = Math.floor(Math.random() * 100);
  return { projectID, projectName, projectDesc };
};

export default ProjectFactory;
