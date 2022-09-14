const {
  client,
  User,
  Customer,
  Project,
  Template,
  Section,
  TemplateSection,
} = require("./");

const { usersData } = require("./UserData.cjs");
const { customerData } = require("./CustomerData.cjs");
const { projectData } = require("./ProjectData.cjs");
const { templateData } = require("./TemplateData.cjs");
const { sectionData } = require("./SectionData.cjs");
async function buildTables() {
  try {
    client.connect();
    console.log("Started dropping tables");

    //drop tables in the correct order
    await client.query(`
    DROP TABLE IF EXISTS template_sections;
    DROP TABLE IF EXISTS sections;
    DROP TABLE IF EXISTS projects;
    DROP TABLE IF EXISTS templates;
    DROP TABLE IF EXISTS customers;
    DROP TABLE IF EXISTS users
    `);
    console.log("Finished dropping tables.");
    console.log("Started creating tables.");

    //build tables in correct order
    await client.query(`
    
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email varchar(255) UNIQUE NOT NULL,
        password varchar(255) NOT NULL,
        "firstName" varchar(255),
        "lastName" varchar(255),
        department varchar(255),
        position varchar(255),
        "officeNumber" varchar(255)
    );
    CREATE TABLE customers (
      id SERIAL PRIMARY KEY,
      "companyName" varchar(255) NOT NULL,
      "companyRep" varchar(255) NOT NULL,
      "salesRep" varchar(255),
      description text NOT NULL,
      needs text NOT NULL,
      "prospectValue" varchar(255)
  );
  CREATE TABLE templates (
    id SERIAL PRIMARY KEY,
    types varchar(255)
  );
  CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    "projectTitle" varchar(255) NOT NULL,
    "projectOwner" varchar(255) NOT NULL,
    "projectSalesRep" varchar(255),
    description text NOT NULL,
    status varchar(255),
    "templateId" INTEGER REFERENCES templates(id)
      );
  CREATE TABLE sections (
    id SERIAL PRIMARY KEY,
    "sectionTitle" varchar(255) NOT NULL,
    "sectionTextField" text,
    "sectionDropdowns" text,
    "sectionSelects" text,
    "isSectionContingentOnValue" BOOLEAN DEFAULT false,
    "sectionContingentsOnTitle" varchar(255)
  );    
  CREATE TABLE template_sections (
        id SERIAL PRIMARY KEY,
        "templateId" INTEGER REFERENCES templates(id) ON DELETE CASCADE,
        "sectionId" INTEGER REFERENCES sections(id) ON DELETE CASCADE  
          );
 
  `);
    console.log("Finished creating tables");
  } catch (error) {
    throw error;
  }
}

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");

    const users = await Promise.all(usersData.map(User.createUser));
    console.log("Finished Creating Users!");
  } catch (error) {
    throw error;
  }
}

async function createInitialCustomers() {
  try {
    console.log("Starting to create customers...");

    const customers = await Promise.all(
      customerData.map(Customer.createCustomer)
    );
    console.log("Finished Creating Customers!");
  } catch (error) {
    throw error;
  }
}
async function createInitialProjects() {
  try {
    console.log("Starting to create projects...");
    const projects = await Promise.all(projectData.map(Project.createProject));
    console.log("Finished Creating Projects!");
  } catch (error) {
    throw error;
  }
}
async function createInitialTemplates() {
  try {
    console.log("Starting to create projects...");
    const templates = await Promise.all(
      templateData.map(Template.createTemplate)
    );
    console.log("Finished Creating Templates!");
  } catch (error) {
    throw error;
  }
}
async function createInitialSections() {
  try {
    console.log("Starting to create sections...");
    const sections = await Promise.all(sectionData.map(Section.createSection));
    console.log("Finished Creating Section!");
  } catch (error) {
    throw error;
  }
}

async function addInitialSectionsToTemplates() {
  try {
    console.log("Starting to add initial sections to templates");

    const sectionsToAdd = [
      { templateId: 1, sectionId: 1 },
      { templateId: 2, sectionId: 1 },
      { templateId: 3, sectionId: 1 },
      { templateId: 5, sectionId: 1 },
    ];

    const templateSections = await Promise.all(
      sectionsToAdd.map(TemplateSection.addSectionToTemplate)
    );

    console.log("Finished adding sections to templates");
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(createInitialUsers)
  .then(createInitialCustomers)
  .then(createInitialProjects)
  .then(createInitialTemplates)
  .then(createInitialSections)
  .then(addInitialSectionsToTemplates)
  .catch(console.error)
  .finally(() => client.end());
