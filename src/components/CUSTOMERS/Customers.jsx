import React, { useState, useEffect } from "react";

import useAuth from "../hooks/userAuth";
import useLogin from "../hooks/useLogin";

import { getAllCustomers } from "../../axios";

const Customers = () => {
  const { error, setError, errorMessage, setErrorMessage } = useLogin();
  const { token, user } = useAuth();
  const [allCustomers, setAllCustomers] = useState([]);

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
      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0">Current Customers</h6>

        {allCustomers.map((customer, idx) => {
          console.log("what is allCustomers?", allCustomers);
          return (
            <div
              className="d-flex text-muted pt-3"
              key={`allCustomersList: ${idx}`}
            >
              <p className="pb-3 mb-0 small lh-sm border-bottom">
                <strong className="d-block text-gray-dark">
                  {customer.companyName}
                </strong>
                {customer.description}
              </p>
              <p>{customer.prospectValue}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Customers;
