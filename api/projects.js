const projectsRouter = require("express").Router();

const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
} = require("../db/models/projects");

const { requireUser } = require("./utils");

projectsRouter.use("/", (req, res, next) => {
  console.log("A request is being made to /projects.");
  next();
});

projectsRouter.get("/all", requireUser, async (req, res, next) => {
  console.log("getting all projects - api");
  try {
    const allProjects = await getAllProjects();

    res.send(allProjects);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

projectsRouter.get("/byId/:projectId", async (req, res, next) => {
  const id = req.params.projectId;

  try {
    const viewProject = await getProjectById(id);
    console.log("attempting to view single Project info from api", id);
    res.send(viewProject);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

projectsRouter.post("/", requireUser, async (req, res, next) => {
  const {
    projectTitle,
    projectOwner,
    projectSalesRep,
    description,
    status,
    creationDate,
  } = req.body;

  const newProjectInfo = {
    projectTitle,
    projectOwner,
    projectSalesRep,
    description,
    status,
    creationDate,
  };

  try {
    const project = await createProject(newProjectInfo);
    res.send(project);
  } catch ({ name, message }) {
    res.status(409);
    next({ name, message });
  }
});

projectsRouter.patch("/:projectId", requireUser, async (req, res, next) => {
  const { projectId } = req.params;
  const {
    projectTitle,
    projectOwner,
    projectSalesRep,
    description,
    status,
    creationDate,
  } = req.body;
  console.log("api -projectId", projectId);
  try {
    const editProject = await updateProject({
      id: +projectId,
      projectTitle,
      projectOwner,
      projectSalesRep,
      description,
      status,
      creationDate,
    });
    console.log("api - customer patch - customerID", +projectId);
    res.send({ editProject });
  } catch ({ name, message }) {
    res.status(409);
    next({ name, message });
  }
});

module.exports = projectsRouter;
