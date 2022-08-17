const client = require("../client");

module.exports = {
  createProject,
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
    console.log("new project through db - createProject", project);
    return project;
  } catch (error) {
    throw error;
  }
}
