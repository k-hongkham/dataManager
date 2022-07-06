import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/userAuth";
import { getAllCustomers, updateCustomer } from "../../axios";

const UpdateCustomer = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  return <div></div>;
};

export default UpdateCustomer;
