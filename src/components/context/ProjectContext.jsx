import React from "react";

export const ProjectContext = React.createContext();

const ProjectProvider = ({ children }) => {
  return (
    <ProjectContext.Provider value={{}}>{children}</ProjectContext.Provider>
  );
};

export default ProjectProvider;
