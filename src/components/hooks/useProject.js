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
    projectError,
    setProjectError,
    projectErrorMessage,
    setProjectErrorMessage,
    searchParams,
    setSearchParams,
    searchTerm,
    setSearchTerm,
    searchObj,
    setSearchObj,
    filterProjects,
    setFilterProjects,
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
    projectError,
    setProjectError,
    projectErrorMessage,
    setProjectErrorMessage,
    searchParams,
    setSearchParams,
    searchTerm,
    setSearchTerm,
    searchObj,
    setSearchObj,
    filterProjects,
    setFilterProjects,
  };
};

export default useProject;
