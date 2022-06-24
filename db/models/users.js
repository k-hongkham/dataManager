const client = require("../client");
const bcrypt = require("bcrypt");
const SALT = 10;

module.exports = {
  createUser,
  getUserByEmail
};

async function createUser({
  email,
  password,
  firstName,
  lastName,
  department,
  position,
  officeNumber,
}) {
  const hashedPW = bcrypt.hashSync(password, SALT);
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        INSERT INTO 
            users(email, password, "firstName", "lastName", department, position, "officeNumber")
        VALUES
            ($1, $2, $3, $4, $5,$6, $7)
        ON CONFLICT (email) DO NOTHING
        RETURNING 
            id, email, "firstName", "lastName", department, position, "officeNumber"`,
      [email, hashedPW, firstName, lastName, department, position, officeNumber]
    );
    return user;
  } catch (error) {
    console.error("error in createUser db");
    throw error;
  }
}

async function getUserByEmail(email) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT *
    FROM users
    WHERE email=$1
    `,
      [email]
    );
    return user;.
  } catch (error) {
    throw error;
  }
}
