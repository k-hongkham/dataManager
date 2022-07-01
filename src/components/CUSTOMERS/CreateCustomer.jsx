import React from "react";

import useAuth from "../hooks/userAuth";
import useLogin from "../hooks/useLogin";

import { Link, useNavigate } from "react-router-dom";

import { createCustomer, getAllCustomers } from "../../axios";

const CreateCustomer = () => {
  const navigate = useNavigate();
  const { token, user } = useAuth();

  return <div>CREATE</div>;
};

export default CreateCustomer;
