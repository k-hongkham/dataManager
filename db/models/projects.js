const { Form } = require("react-bootstrap");
const projectsRouter = require("../../api/projects");
const client = require("../client");

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
};

async function createProject({
  projectTitle,
  projectOwner,
  projectSalesRep,
  description,
  status,
}) {
  try {
    const {
      rows: [project],
    } = await client.query(
      `
        INSERT INTO projects("projectTitle", "projectOwner", "projectSalesRep", description, status)
        VALUES($1,$2,$3,$4,$5) 
        RETURNING *;
        `,
      [projectTitle, projectOwner, projectSalesRep, description, status]
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
    projects."projectTitle" AS "projectTitle",
    projects."projectOwner" AS "projectOwner",
    projects."projectSalesRep" AS "projectSalesRep",
    projects.description AS "description",
    projects.status AS "status"
    FROM projects
    ORDER BY projects.id desc`
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getProjectById(id) {
  try {
    const {
      rows: [project],
    } = await client.query(
      `
  SELECT *
  FROM projects
  WHERE projects.id =$1;
  `,
      [id]
    );
    console.log("in DB for getProjectById", project);
    return project;
  } catch (error) {
    throw error;
  }
}

async function updateProject(fields = {}) {
  const setString = Object.keys(fields)
    .map((key, idx) => `"${key}"=$${idx + 1}`)
    .join(", ");

  if (setString.length === 0) {
    return;
  }
  try {
    const {
      rows: [project],
    } = await client.query(
      `
    UPDATE projects
    SET ${setString}
    WHERE id =${fields.id}
    RETURNING*;
    `,
      Object.values(fields)
    );
    console.log("DB- project - update project", project);
    return project;
  } catch (error) {
    throw error;
  }
}
