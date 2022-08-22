import React from "react";

const ProjectRow = ({ project }) => {
  return (
    <>
      <td>{project.id}</td>
      <td>{project.ProjectTitle}</td>
      <td>{project.ProjectOwner} </td>
      <td>{project.ProjectSalesRep}</td>
      <td
        className="table-description"
        style={{ wordWrap: "break-word", minWidth: "400px", maxWidth: "400px" }}
      >
        {project.Description}
      </td>
    </>
  );
};

export default ProjectRow;
