import React, { useEffect } from "react";
import useAuth from "../hooks/userAuth";
import useProject from "../hooks/useProject";
import { getAllProjects } from "../../axios";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { token, user } = useAuth();
  const { allProjectsArray, setAllProjectsArray } = useProject();

  useEffect(() => {
    const displayProjects = async () => {
      if (localStorage.getItem("token")) {
        const data = await getAllProjects(token);
        setAllProjectsArray(data);

        console.log("useEffect-allProjects: ", allProjectsArray);
      }
    };
    displayProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div className="container mx-auto pb-3 mb-3 mb-md-5 mt-4">
      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0"> Projects</h6>

        {Array.isArray(allProjectsArray) && allProjectsArray.length
          ? allProjectsArray.map((project, idx) => {
              return (
                <div
                  key={`ProjectsList: ${idx}`}
                  className="d-flex text-muted pt-3 "
                  style={{ border: "1px solid black" }}
                >
                  <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                      <strong className="d-block text-gray-dark">
                        {project.projectTitle}
                      </strong>
                    </div>
                  </div>
                  <ProjectCard project={project} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Projects;
