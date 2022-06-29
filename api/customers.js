const customersRouter = require("express").Router();
const { getAllCustomers } = require("../db/models/customers");
const { get } = require("./users");
const { requireUser } = require("./utils");

customersRouter.use("/", (req, res, next) => {
  console.log("A request is being made to /customers.");
  next();
});

customersRouter.get("/all", requireUser, async (req, res, next) => {
  try {
    const allCustomers = await getAllCustomers();
    res.send(allCustomers);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = customersRouter;
