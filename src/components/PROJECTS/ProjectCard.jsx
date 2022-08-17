import React from "react";
import { Button } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("projectcard:", project);
        }}
      >
        TESTING
      </button>
      <h1>{project.ProjectTitle}</h1>
      <h1>{project.ProjectOwner} </h1>
      <h1>{project.ProjectSalesRep}</h1>
      <h1>{project.Description}</h1>
    </div>
  );
};

export default ProjectCard;
