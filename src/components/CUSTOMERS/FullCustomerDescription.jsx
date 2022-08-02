import React from "react";

import useAuth from "../hooks/userAuth";

const FullCustomerDescription = ({ customer }) => {
  const { token } = useAuth();

  return (
    <div>
      <div>
        <h1>PROJECT TYPE{customer.id}</h1>
      </div>
      <div>
        <h1>CUSTOMER REP{customer.companyName}</h1>
      </div>
      <div>
        <h1>SALES REP</h1>
      </div>
      <div>
        <h1>DESCRIPTION</h1>
      </div>
      <div>
        <h1>TASKS</h1>
      </div>
      <div>
        <h1>CONTACTS</h1>
      </div>
      <div>
        <h1>NEEDS</h1>
      </div>
      <div>
        <h1>scope of work</h1>
      </div>
    </div>
  );
};

export default FullCustomerDescription;
