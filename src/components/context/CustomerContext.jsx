import React, { useState } from "react";

export const CustomerContext = React.createContext();

const CustomerProvider = ({ children }) => {
  const [customer, setCustomer] = useState({});
  const [companyName, setCompanyName] = useState("");
  const [companyRep, setCompanyRep] = useState("");
  const [salesRep, setSalesRep] = useState("");
  const [description, setDescription] = useState("");
  const [needs, setNeeds] = useState("");
  const [prospectValue, setProspectValue] = useState(0);
  const [allCustomers, setAllCustomers] = useState([]);
  const [accessCustomers, setAccessCustomers] = useState(false);
  return (
    <CustomerContext.Provider
      value={{
        companyName,
        setCompanyName,
        companyRep,
        setCompanyRep,
        salesRep,
        setSalesRep,
        description,
        setDescription,
        needs,
        setNeeds,
        prospectValue,
        setProspectValue,
        allCustomers,
        setAllCustomers,
        accessCustomers,
        setAccessCustomers,
        customer,
        setCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerProvider;
