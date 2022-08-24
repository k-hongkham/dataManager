import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProjectRow = ({ project }) => {
  const navigate = useNavigate();
  const handleNewProject = (project) => {
    navigate(`/${project.id}`);
  };
  return (
    <>
      <Link
        to={`/projects/${project.id}`}
        onClick={() => {
          handleNewProject(project);
        }}
      >
        <td>{project.id}</td>
      </Link>
      <td>{project.projectTitle}</td>
      <td>{project.projectOwner} </td>
      <td>{project.projectSalesRep}</td>
      <td
        className="table-description"
        style={{ wordWrap: "break-word", minWidth: "400px", maxWidth: "400px" }}
      >
        {project.description}
      </td>
      <td>{project.status}</td>
    </>
  );
};

export default ProjectRow;
