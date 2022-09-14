import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/userAuth";
import useProject from "../hooks/useProject";
import { getAllProjects } from "../../axios";
import ProjectRow from "./ProjectRow";
import { Button } from "react-bootstrap";
import ProjectSearch from "./ProjectSearch";

const Projects = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { setAllProjectsArray, filterProjects } = useProject();

  useEffect(() => {
    const displayProjects = async () => {
      if (localStorage.getItem("token")) {
        const data = await getAllProjects(token);
        setAllProjectsArray(data);
      }
    };
    displayProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleNewProject = () => {
    navigate(`/newProject`);
  };

  return (
    <div className="container mx-auto pb-3 mb-3 mb-md-5 mt-4">
      <Link to={`/newProject`} onClick={handleNewProject}>
        <Button variant="primary">New Project +</Button>
      </Link>
      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0"> Projects</h6>
        <ProjectSearch />

        <table className="table table-hover ">
          <thead>
            <th scope="col">Project Id</th>
            <th scope="col">Title</th>
            <th scope="col">Owner</th>
            <th scope="col">Sales Rep</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </thead>
          <tbody>
            {Array.isArray(filterProjects) && filterProjects.length
              ? filterProjects.map((project) => {
                  return (
                    <tr key={`ProjectsList: ${project.id}`}>
                      <ProjectRow project={project} />
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
