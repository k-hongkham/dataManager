import React from "react";
import { Routes, Route } from "react-router-dom";

import useAuth from "../hooks/userAuth";
import useCustomer from "../hooks/useCustomer";

import Home from "./Home";
import Customers from "../CUSTOMERS/Customers";
import Directory from "../DIRECTORY/Directory";
import FullCustomerDescription from "../CUSTOMERS/FullCustomerDescription";

const Main = () => {
  const { user } = useAuth();
  const { customers } = useCustomer();

  return (
    <Routes>
      <Route path="/Customers" element={<Customers />} />
      <Route path="/CompanyDirectory" element={<Directory />} />
      <Route path="/" element={<Home />} />

      {customers
        ? customers.map((customer) => (
            <Route
              key={`SingleCustomerLink ${customer.id}`}
              path={`/ViewCustomer/${customer.id}`}
              element={<FullCustomerDescription customer={customer} />}
            />
          ))
        : null}
    </Routes>
  );
};

export default Main;
