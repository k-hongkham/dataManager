const client = require("../client");

module.exports = { createCustomer };

async function createCustomer({
  companyName,
  companyRep,
  salesRep,
  description,
  needs,
  prospectValue,
}) {
  try {
    const {
      rows: [customer],
    } = await client.query(
      `
        INSERT INTO customers("companyName", "companyRep", "salesRep", description, needs, "prospectValue")
        VALUES($1,$2,$3,$4,$5,$6) 
        RETURNING *;
        `,
      [companyName, companyRep, salesRep, description, needs, prospectValue]
    );
    return customer;
  } catch (error) {
    throw error;
  }
}
