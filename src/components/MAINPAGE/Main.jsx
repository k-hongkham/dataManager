import React from "react";
import { Routes, Route } from "react-router-dom";

import useAuth from "../hooks/userAuth";

import Home from "./Home";
import Customers from "../CUSTOMERS/Customers";

const Main = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/Customers" element={<Customers />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
};

export default Main;
