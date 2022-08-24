const client = require("../client");
module.exports = {
  createTemplate,
  getAllTemplateTypes,
};

async function createTemplate({ types }) {
  try {
    const {
      rows: [template],
    } = await client.query(
      `INSERT INTO templates(types)
        VALUES($1)
        RETURNING *;
        `,
      [types]
    );
    return template;
  } catch (error) {
    throw error;
  }
}

async function getAllTemplateTypes() {
  try {
    const { rows } = await client.query(`
        SELECT
        templates.id AS "id",
        templates.types AS "types"
        FROM templates
        ORDER BY templates.id desc
        `);
    return rows;
  } catch (error) {
    throw error;
  }
}
