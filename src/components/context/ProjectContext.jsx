import React, { useState } from "react";

export const ProjectContext = React.createContext();

const ProjectProvider = ({ children }) => {
  const [allProjectsArray, setAllProjectsArray] = useState([]);
  const [currentProject, setCurrentProject] = useState({});
  const [projectTitle, setProjectTitle] = useState("");
  const [projectOwner, setProjectOwner] = useState("");
  const [projectSalesRep, setProjectSalesRep] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  return (
    <ProjectContext.Provider
      value={{
        allProjectsArray,
        setAllProjectsArray,
        currentProject,
        setCurrentProject,
        projectTitle,
        setProjectTitle,
        projectOwner,
        setProjectOwner,
        projectSalesRep,
        setProjectSalesRep,
        projectDescription,
        setProjectDescription,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
