import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import useAuth from "../hooks/userAuth";
import useLogin from "../hooks/useLogin";

import { Link, useNavigate } from "react-router-dom";

import { createCustomer, getAllCustomers } from "../../axios";

const CreateCustomer = ({
  setAllCustomers,
  accessCustomers,
  setAccessCustomers,
}) => {
  const navigate = useNavigate();
  const { token, user } = useAuth();
  const [companyName, setCompanyName] = useState("");
  const [companyRep, setCompanyRep] = useState("");
  const [salesRep, setSalesRep] = useState("");
  const [description, setDescription] = useState("");
  const [needs, setNeeds] = useState("");
  const [prospectValue, setProspectValue] = useState(0);

  return (
    <Modal
      show={accessCustomers}
      onHide={() => setAccessCustomers(true)}
    ></Modal>
  );
};

export default CreateCustomer;
