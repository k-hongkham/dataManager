const { client } = require("./");

async function buildTables() {
  try {
    client.connect();
    console.log("Started dropping tables");

    //drop tables in the correct order
    await client.query(`
        DROP TABLE IF EXISTS users
        `);
    console.log("Finished dropping tables.");

    //build tables in correct order
    await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email varchar(255) UNIQUE NOT NULL,
            password varchar(255) NOT NULL,
            "firstName" varchar(255),
            "lastName" varchar(255),
            "department" varchar(255),
            "position" varchar(255),
            "officeNumber"
        )`);

    console.log("Finished creating tables");
  } catch (error) {
    throw error;
  }
}

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");
    const usersToCreate = [
      {
        email: "kevin@kevin.com",
        password: "kevin",
        firstName: "Kevin",
        lastName: "Hongkham",
        department: "R&D",
        position: "Chemist",
        officeNumber: "(555) 555-5555",
      },
      {
        email: "amy@amy.com",
        password: "amy",
        firstName: "amy",
        lastName: "amy",
        department: "Business",
        position: "Owner",
        officeNumber: "(Owner) 555-5555",
      },
      {
        email: "daniel@daniel.com",
        password: "daniel",
        firstName: "daniel",
        lastName: "daniel",
        department: "Sales",
        position: "Manager",
        officeNumber: "(555) 555-5555",
      },
      {
        email: "Cung@Cung.com",
        password: "Cung",
        firstName: "Cung",
        lastName: "Cung",
        department: "Software",
        position: "Manager",
        officeNumber: "(555) 555-5555",
      },
    ];

    const users = await Promise.all(usersToCreate.map(User.createUser));
    console.log("Finished Creating Users!");
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(createInitialUsers)
  .catch(console.error)
  .finally(() => client.end());
