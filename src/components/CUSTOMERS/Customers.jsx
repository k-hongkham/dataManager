import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../hooks/userAuth.js";

import { getAllCustomers } from "../../axios";

import CreateCustomer from "./CreateCustomer.jsx";
import DeleteCustomer from "./DeleteCustomer.jsx";
import CustomerPagination from "../CustomerPagination.js";

const Customers = ({
  totalCustomers,
  allCustomers,
  setAllCustomers,
  customersPerPage,
  setCustomersPerPage,
  currentCustomerPage,
  setCurrentCustomerPage,
}) => {
  const navigate = useNavigate();

  const { token } = useAuth();

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

  const handleCustomerSelect = (customer) => {
    navigate(`/${customer.id}`);
  };

  useEffect(() => {
    const getCustomers = async () => {
      if (localStorage.getItem("token")) {
        const theCustomers = await getAllCustomers(token);
        setAllCustomers(theCustomers);
      }
    };
    getCustomers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <h6 className="border-bottom pb-2 mb-0">Customers</h6>
        {Array.isArray(allCustomers) && allCustomers.length
          ? allCustomers.map((customer, idx) => {
              return (
                <div
                  className="d-flex text-muted pt-3 customerId"
                  key={`allCustomersList: ${idx}`}
                  rowEvents={rowEvents}
                >
                  {" "}
                  <Link
                    to={`/customers/${customer.id}`}
                    onClick={() => {
                      handleCustomerSelect(customer);
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
                  <DeleteCustomer
                    customer={customer}
                    setAllCustomers={setAllCustomers}
                  />
                </div>
              );
            })
          : null}
      </div>
      <CustomerPagination
        currentCustomerPage={currentCustomerPage}
        setCurrentCustomerPage={setCurrentCustomerPage}
        customersPerPage={customersPerPage}
        setCustomersPerPage={setCustomersPerPage}
        totalCustomers={totalCustomers}
      />
    </div>
  );
};

export default Customers;
