import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/userAuth";
import useProject from "../hooks/useProject";
import { getAllProjects } from "../../axios";
import ProjectRow from "./ProjectRow";
import { Button } from "react-bootstrap";

const Projects = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { allProjectsArray, setAllProjectsArray } = useProject();
  const [order, setOrder] = useState("ASC");

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

  const sort = (col) => {
    for (let i = 0; i <= allProjectsArray.length; i++) {
      if (order === "ASC") {
        const sort = [...allProjectsArray].sort((a, b) =>
          a[col] > b[col] ? 1 : -1
        );

        setAllProjectsArray(sort);
        setOrder("ASC");
      }

      if (order === "DSC") {
        const sort = [...allProjectsArray].reverse((a, b) =>
          a[col] < b[col] ? 1 : -1
        );
        setAllProjectsArray(sort);
        setOrder("DSC");
      }
    }
  };

  return (
    <div className="container mx-auto pb-3 mb-3 mb-md-5 mt-4">
      <Link to={`/newProject`} onClick={handleNewProject}>
        <Button variant="primary">New Project +</Button>
      </Link>
      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0"> Projects</h6>

        <table className="table table-hover ">
          <thead>
            <th
              scope="col"
              onClick={() => sort(allProjectsArray[0].projectTitle)}
            >
              Project Id
            </th>
            <th scope="col" onClick={() => sort(allProjectsArray.projectTitle)}>
              Title
            </th>
            <th scope="col">Owner</th>
            <th scope="col">Sales Rep</th>
            <th scope="col">Description</th>
            <th scope="col" onClick={() => sort(allProjectsArray.id)}>
              Status
            </th>
          </thead>
          <tbody>
            {Array.isArray(allProjectsArray) && allProjectsArray.length
              ? allProjectsArray.map((project) => {
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
