const client = require("../client");

module.exports = { createCustomer, getAllCustomers };

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

async function getAllCustomers() {
  try {
    const { rows } = await client.query(`
    SELECT 
    customers.id AS id, 
    customers."companyName" AS "CompanyName",
    customers."companyRep" AS "CompanyRep",
    customers."salesRep" AS "SalesRep",
    customers.description AS "Description",
    customers.needs AS "CustomerNeeds",
    customers."prospectValue" AS "ProspectValue"
    FROM customers 
    ORDER BY  customers.id desc
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}
