import React from "react";
import useAuth from "../hooks/userAuth";
import useProject from "../hooks/useProject";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { token } = useAuth();
  const { allProjectsArray } = useProject();

  return (
    <div className="container mx-auto pb-3 mb-3 mb-md-5 mt-4">
      <h6 className="border-bottom pb-2 mb-0"> Projects</h6>
      <div className="row justify-content-center mx-auto pb-3 mb-3 mb-md-5 mt-4">
        {allProjectsArray.map((project, idx) => {
          return (
            <div
              key={`Projects: ${idx}`}
              className="col-sm-6 col-md-4 col-xl-3 mb-3 me-md-3  "
              style={{ border: "1px solid black" }}
            >
              <ProjectCard project={project} />
              <div>
                <h1>{project.projectTitle}</h1>
                <h1>{project.projectOwner}</h1>
                <h1>{project.projectSalesRep}</h1>
                <h1>{project.description}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
