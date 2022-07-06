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

customersRouter.post("/", requireUser, async (req, res, next) => {
  const {
    companyName,
    companyRep,
    salesRep,
    description,
    needs,
    prospectValue,
  } = req.body;
  console.log(
    "trying to make a new customer in the api but it says not null",
    salesRep
  );

  const newCustomerInfo = {
    companyName,
    companyRep,
    salesRep,
    description,
    needs,
    prospectValue,
  };
  console.log("new customer being added through api route", newCustomerInfo);

  try {
    const customer = await createCustomer(newCustomerInfo);
    res.send(customer);
  } catch ({ name, message }) {
    res.status(409);
    next({ name, message });
  }
});

module.exports = customersRouter;
