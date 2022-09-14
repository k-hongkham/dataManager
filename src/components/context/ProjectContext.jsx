import React, { useState, useEffect } from "react";
import { getAllProjects } from "../../axios";
import useAuth from "../hooks/userAuth";

export const ProjectContext = React.createContext();

const ProjectProvider = ({ children }) => {
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
  }, []);

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
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
