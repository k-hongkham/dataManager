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
      <Route path="/Users" element={<Directory />} />
      <Route path="/" element={<Home />} />
      <Route path={`/ViewCustomer/:id`} element={<FullCustomerDescription />} />
    </Routes>
  );
};

export default Main;
