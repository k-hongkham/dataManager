import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

const useProject = () => {
  const {
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
    status,
    setStatus,
  } = useContext(ProjectContext);

  return {
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
    status,
    setStatus,
  };
};

export default useProject;
