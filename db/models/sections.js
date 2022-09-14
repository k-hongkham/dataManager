const client = require("../client");

module.exports = {
  createSection,
};

async function createSection({
  sectionTitle,
  sectionTextField,
  sectionDropdowns,
  sectionSelects,
  isSectionContingentOnValue,
  sectionContingentsOnTitle,
}) {
  try {
    const {
      rows: [section],
    } = await client.query(
      `
          INSERT INTO sections("sectionTitle", "sectionTextField", "sectionDropdowns", "sectionSelects", "isSectionContingentOnValue", "sectionContingentsOnTitle")
          VALUES($1,$2,$3,$4,$5,$6 ) 
          RETURNING *;
          `,
      [
        sectionTitle,
        sectionTextField,
        sectionDropdowns,
        sectionSelects,
        isSectionContingentOnValue,
        sectionContingentsOnTitle,
      ]
    );

    return section;
  } catch (error) {
    throw error;
  }
}
