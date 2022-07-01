import React from "react";

import useAuth from "../hooks/userAuth";
import useLogin from "../hooks/useLogin";
import useCustomer from "../hooks/useCustomer";

import { Link, useNavigate } from "react-router-dom";

import { createCustomer, getAllCustomers } from "../../axios";

const CreateCustomer = () => {
  const navigate = useNavigate();
  const { token, user } = useAuth();
  const {
    companyName,
    setCompanyName,
    companyRep,
    setCompanyRep,
    salesRep,
    setSalesRep,
    description,
    setDescription,
    needs,
    setNeeds,
    prospectValue,
    setProspectValue,
  } = useCustomer();

  return <div>CREATE</div>;
};

export default CreateCustomer;
