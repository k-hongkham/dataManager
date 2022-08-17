const projectsRouter = require("express").Router();

const { createProject, getAllProjects } = require("../db/models/projects");

const { requireUser } = require("./utils");

projectsRouter.use("/", (req, res, next) => {
  console.log("A request is being made to /projects.");
  next();
});

projectsRouter.get("/all", requireUser, async (req, res, next) => {
  try {
    const allProjects = await getAllProjects();
    console.log("attempting to get all Projects - API connection");
    res.send(allProjects);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = projectsRouter;
