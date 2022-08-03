import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useAuth from "../hooks/userAuth";
import useCustomer from "../hooks/useCustomer";
import { getCustomerById } from "../../axios";

const FullCustomerDescription = () => {
  let params = useParams();
  console.log("customer params", params);

  const { token } = useAuth();
  const { setCurrentCustomer, currentCustomer } = useCustomer();

  useEffect(() => {
    console.log("is use effect happening?");
    const getCustomer = async () => {
      const customer = await getCustomerById(token, params.id);
      console.log("defining customer for getById", customer);
      setCurrentCustomer(customer);
    };
    getCustomer();
  }, []);

  return (
    <div>
      <div>
        <h1>PROJECT TYPE</h1>
        {currentCustomer.id}
        {currentCustomer.companyName}
      </div>
      <div>
        <h1>CUSTOMER REP</h1>
        {currentCustomer.salesRep}
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
