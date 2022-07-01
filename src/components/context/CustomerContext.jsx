import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import useAuth from "../hooks/userAuth";

export const CustomerContext = React.createContext();

const CustomerProvider = ({ children }) => {
  const { user, token } = useAuth();
  let location = useLocation();

  const [companyName, setCompanyName] = useState("");
  const [companyRep, setCompanyRep] = useState("");
  const [salesRep, setSalesRep] = useState("");
  const [description, setDescription] = useState("");
  const [needs, setNeeds] = useState("");
  const [prospectValue, setProspectValue] = useState(0);

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
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
