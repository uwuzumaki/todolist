const ProjectFactory = (projectName, projectDesc) => {
  const projectID = Math.floor(Math.random() * 10000);
  return { projectID, projectName, projectDesc };
};

export default ProjectFactory;
