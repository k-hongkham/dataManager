const { Form } = require("react-bootstrap");
const projectsRouter = require("../../api/projects");
const client = require("../client");

module.exports = {
  createProject,
  getAllProjects,
};

async function createProject({
  projectTitle,
  projectOwner,
  projectSalesRep,
  description,
}) {
  try {
    const {
      rows: [project],
    } = await client.query(
      `
        INSERT INTO projects("projectTitle", "projectOwner", "projectSalesRep", description)
        VALUES($1,$2,$3,$4) 
        RETURNING *;
        `,
      [projectTitle, projectOwner, projectSalesRep, description]
    );

    return project;
  } catch (error) {
    throw error;
  }
}

async function getAllProjects() {
  try {
    const { rows } = await client.query(
      `SELECT
    projects.id AS id,
    projects."projectTitle" AS "ProjectTitle",
    projects."projectOwner" AS "ProjectOwner",
    projects."projectSalesRep" AS "ProjectSalesRep",
    projects.description AS "Description"
    FROM projects
    ORDER BY projects.id desc`
    );
    console.log("get projects through db - getAllProjects", rows);
    return rows;
  } catch (error) {
    throw error;
  }
}
