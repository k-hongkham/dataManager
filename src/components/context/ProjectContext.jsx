import React, { useState, useEffect } from "react";
import { getAllProjects } from "../../axios";
import useAuth from "../hooks/userAuth";
import { useLocation, useSearchParams } from "react-router-dom";

export const ProjectContext = React.createContext();

const ProjectProvider = ({ children }) => {
  let location = useLocation();
  const params = new URLSearchParams(location.search);
  const [searchParams, setSearchParams] = useSearchParams();
  const { user, token } = useAuth();
  const [allProjectsArray, setAllProjectsArray] = useState([]);
  const [currentProject, setCurrentProject] = useState({});
  const [projectTitle, setProjectTitle] = useState("");
  const [projectOwner, setProjectOwner] = useState("");
  const [projectSalesRep, setProjectSalesRep] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [status, setStatus] = useState("");
  const [projectError, setProjectError] = useState(false);
  const [projectErrorMessage, setProjectErrorMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterProjects, setFilterProjects] = useState([]);
  const [searchObj, setSearchObj] = useState({
    query: params.get("q") ? params.get("q") : "",
  });

  useEffect(() => {
    if (user) {
      const displayProjects = async () => {
        const data = await getAllProjects(token);
        setAllProjectsArray(data);
      };
      displayProjects();
      setProjectError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (location.pathname === "/Projects") {
      params.set("q", searchObj.query);
      setSearchParams(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    setFilterProjects(allProjectsArray);
    console.log("filtered projects: ", filterProjects);
    const searchFilter = [];
    if (allProjectsArray.length) {
      // lowercase the query
      const searchQuery = searchObj.query.toLowerCase();
      // lowercase function
      function tLC(objProp) {
        return objProp.toLowerCase();
      }

      allProjectsArray.forEach((project) => {
        if (
          tLC(project.projectTitle).includes(searchQuery) ||
          tLC(project.projectOwner).includes(searchQuery) ||
          tLC(project.projectSalesRep).includes(searchQuery) ||
          tLC(project.status).includes(searchQuery) ||
          tLC(project.description).includes(searchQuery)
        ) {
          searchFilter.push(project);
        }
      });
      setFilterProjects(searchFilter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allProjectsArray, searchObj]);

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
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
