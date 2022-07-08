import React from "react";
import { Routes, Route } from "react-router-dom";

import useAuth from "../hooks/userAuth";

import Home from "./Home";
import Customers from "../CUSTOMERS/Customers";
import Directory from "../DIRECTORY/Directory";

const Main = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/Customers" element={<Customers />} />
      <Route path="/CompanyDirectory" element={<Directory />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Main;
