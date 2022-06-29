import React, { useState } from "react";

import useAuth from "../hooks/userAuth";
import useLogin from "../hooks/useLogin";

import { getAllCustomers } from "../../axios";

const Customers = () => {
  const { error, setError, errorMessage, setErrorMessage } = useLogin();
  const { token } = useAuth();
  const [allCustomers, setAllCustomers] = useState([]);
  return (
    <div className="container">
      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0">Current Customers</h6>
        {allCustomers.map((_customer, idx) => {
          return (
            <div
              className="d-flex text-muted pt-3"
              key={`allCustomersList: ${idx}`}
            >
              <p className="pb-3 mb-0 small lh-sm border-bottom">
                <strong className="d-block text-gray-dark">
                  {_customer.name}
                </strong>
                {_customer.description}
              </p>
              <p>{_customer.prospectValue}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Customers;
