import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import useAuth from "../hooks/userAuth";
import useLogin from "../hooks/useLogin";
import useCustomer from "../hooks/useCustomer";

import { getAllCustomers } from "../../axios";

import CreateCustomer from "./CreateCustomer";
import UpdateCustomer from "./UpdateCustomer";

const Customers = () => {
  const { error, setError, errorMessage, setErrorMessage } = useLogin();
  const { token, user } = useAuth();
  const { allCustomers, setAllCustomers, accessCustomers, setAccessCustomers } =
    useCustomer();
  const [editCustomer, setEditCustomer] = useState(false);
  const navigate = useNavigate();

  const handleModalOpening = () => {
    setAccessCustomers(true);
    console.log("handling the open model", accessCustomers);
  };
  const handleUpdateOpening = () => {
    setEditCustomer(true);
    console.log("handling the open model", editCustomer);
  };

  useEffect(() => {
    const getCustomers = async () => {
      if (localStorage.getItem("token")) {
        const theCustomers = await getAllCustomers(token);
        setAllCustomers(theCustomers);
      } else {
        setAllCustomers([]);
      }
    };
    getCustomers();
  }, [token]);

  return (
    <div className="container">
      <Button variant="primary" onClick={handleModalOpening}>
        New Customer +
      </Button>
      <Modal
        show={accessCustomers}
        onHide={() => {
          setAccessCustomers(false);
        }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <CreateCustomer
          setAllCustomers={setAllCustomers}
          accessCustomers={accessCustomers}
          setAccessCustomers={setAccessCustomers}
        />
      </Modal>
      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0">Current Customers</h6>

        {allCustomers.map((customer, idx) => {
          return (
            <div
              className="d-flex text-muted pt-3"
              key={`allCustomersList: ${idx}`}
            >
              <div>
                <span>{customer.id}</span>
              </div>
              <p className="pb-3 mb-0 small lh-sm border-bottom">
                <strong className="d-block text-gray-dark">
                  {customer.CompanyName}
                </strong>
                {customer.Description}
              </p>
              <p>{customer.ProspectValue}</p>

              {/* <Button variant="info" onClick={handleUpdateOpening}>
                Update Information {customer.id}
              </Button> */}

              <UpdateCustomer
                customer={customer}
                editCustomer={editCustomer}
                setEditCustomer={setEditCustomer}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Customers;
