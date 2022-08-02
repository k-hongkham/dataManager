import React from "react";
import { useParams } from "react-router-dom";

import useAuth from "../hooks/userAuth";

const FullCustomerDescription = () => {
  let params = useParams();
  console.log("customer params", params.id);
  const { token } = useAuth();

  return (
    <div>
      <div>
        <h1>PROJECT TYPE</h1>
      </div>
      <div>
        <h1>CUSTOMER REP</h1>
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
