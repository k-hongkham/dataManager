const client = require("../client");

module.exports = {
  addSectionToTemplate,
};

async function addSectionToTemplate({ templateId, sectionId }) {
  try {
    const {
      rows: [section],
    } = await client.query(
      `
            INSERT INTO template_sections("templateId", "sectionId")
            VALUES($1, $2)
            RETURNING *
            `,
      [templateId, sectionId]
    );
    return section;
  } catch (error) {
    throw error;
  }
}
