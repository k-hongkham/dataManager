const customersRouter = require("express").Router();
const { getAllCustomers, createCustomer } = require("../db/models/customers");

const { requireUser } = require("./utils");

customersRouter.use("/", (req, res, next) => {
  console.log("A request is being made to /customers.");
  next();
});

customersRouter.get("/all", requireUser, async (req, res, next) => {
  try {
    const allCustomers = await getAllCustomers();
    console.log("attempting to get all Customers from api connection");
    res.send(allCustomers);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

customersRouter.post("/newCustomer", requireUser, async (req, res, next) => {
  const {
    companyName,
    companyRep,
    salesRep,
    description,
    needs,
    prospectValue,
  } = req.body;

  try {
    const customer = await createCustomer(
      companyName,
      companyRep,
      salesRep,
      description,
      needs,
      prospectValue
    );
    res.send(customer);
  } catch ({ name, message }) {
    res.status(409);
    next({ name, message });
  }
});

module.exports = customersRouter;
