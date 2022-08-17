const projectsRouter = require("express").Router();

const { createProject } = require("../db/models/projects");

const { requireUser } = require("./utils");

projectsRouter.use("/", (req, res, next) => {
  console.log("A request is being made to /projects.");
  next();
});

module.exports = projectsRouter;
