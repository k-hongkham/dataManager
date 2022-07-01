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

  const handleCloseout = () => {
    setAccessCustomers(false);
    console.log("closing out", accessCustomers);
  };
  return (
    <Modal
      show={accessCustomers}
      onHide={() => setAccessCustomers(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <header className="modal-header p-5 pb-4 border-bottom-0">
          <h2 className="fw-bold mb-0">New Customer Information</h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={handleCloseout}
          ></button>
        </header>
      </div>
    </Modal>
  );
};

export default CreateCustomer;
