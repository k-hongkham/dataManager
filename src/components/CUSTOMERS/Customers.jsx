import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../hooks/userAuth.js";
import useLogin from "../hooks/useLogin.js";
import useCustomer from "../hooks/useCustomer.js";

import { getAllCustomers, updateCustomer } from "../../axios";

import CreateCustomer from "./CreateCustomer.jsx";
import UpdateCustomer from "./UpdateCustomer.jsx";
import DeleteCustomer from "./DeleteCustomer.jsx";

const Customers = () => {
  const navigate = useNavigate();

  const { token, user } = useAuth();
  const { allCustomers, setAllCustomers, setCurrentCustomer } = useCustomer();
  const [editCustomer, setEditCustomer] = useState(false);
  const [accessCustomers, setAccessCustomers] = useState(false);

  const [modalInfo, setModalInfo] = useState([]);
  const rowEvents = {
    onClick: (row) => {
      console.log(row);
      console.log("modalInfo", modalInfo);
      setModalInfo(row);
    },
  };

  const handleModalOpening = () => {
    setAccessCustomers(true);

    console.log("handling the open model", accessCustomers);
  };

  const handleCustomerSelect = (id) => {
    navigate(`/Customers/${id}`);
  };

  const handleUpdateCustomerInfo = async (modalCustomer) => {
    setEditCustomer(true);
    setCurrentCustomer(modalCustomer);
  };

  useEffect(() => {
    const getCustomers = async () => {
      if (localStorage.getItem("token")) {
        const theCustomers = await getAllCustomers(token);
        setAllCustomers(theCustomers);
      }
    };
    getCustomers();
  }, [token]);

  return (
    <div className="container mx-auto pb-3 mb-3 mb-md-5 mt-4">
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
        {Array.isArray(allCustomers) && allCustomers.length
          ? allCustomers.map((customer, idx) => {
              return (
                <div
                  className="d-flex text-muted pt-3 customerId"
                  key={`allCustomersList: ${idx}`}
                >
                  {" "}
                  <Link
                    to={`/Customers/${customer.id}`}
                    onClick={() => {
                      handleCustomerSelect(customer.id);
                    }}
                  >
                    <div style={{ marginRight: "10px" }}>{customer.id}</div>
                  </Link>
                  <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                      <strong className="d-block text-gray-dark">
                        {customer.CompanyName}
                      </strong>
                    </div>
                    {customer.Description}
                  </div>
                  <p style={{ marginRight: "10px" }}>
                    {customer.ProspectValue}
                  </p>
                  <Button
                    variant="info"
                    rowEvents={rowEvents}
                    onClick={() => {
                      handleUpdateCustomerInfo(customer);
                    }}
                  >
                    Update Customer {customer.id}
                  </Button>
                  {editCustomer ? (
                    <Modal
                      show={editCustomer}
                      onHide={() => {
                        setEditCustomer(false);
                      }}
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <UpdateCustomer
                        editCustomer={editCustomer}
                        setEditCustomer={setEditCustomer}
                        customer={customer}
                      />{" "}
                    </Modal>
                  ) : null}
                  <DeleteCustomer
                    customer={customer}
                    setAllCustomers={setAllCustomers}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Customers;
