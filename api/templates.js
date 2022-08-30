const templatesRouter = require("express").Router();
const { getTemplateByType } = require("../db/models/templates.js");

const { requireUser } = require("./utils");

templatesRouter.use("/", (req, res, next) => {
  console.log("A request is being made to /customers.");
  next();
});

templatesRouter.get("/types", async (req, res, next) => {
  try {
    const types = await getTemplateByType();

    res.send(types);
  } catch ({ name, message }) {
    res.status(409);
    next({ name, message });
  }
});

module.exports = templatesRouter;
