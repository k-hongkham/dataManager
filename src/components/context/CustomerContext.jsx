import React, { useState, useEffect } from "react";
import { getAllCustomers } from "../../axios";
import useAuth from "../hooks/userAuth";

export const CustomerContext = React.createContext();

const CustomerProvider = ({ children }) => {
  const { user, token } = useAuth();

  const [customer, setCustomer] = useState({});
  const [companyName, setCompanyName] = useState("");
  const [companyRep, setCompanyRep] = useState("");
  const [salesRep, setSalesRep] = useState("");
  const [description, setDescription] = useState("");
  const [needs, setNeeds] = useState("");
  const [prospectValue, setProspectValue] = useState("$0");
  const [allCustomers, setAllCustomers] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState({});

  const [currentCustomerPage, setCurrentCustomerPage] = useState(1);
  const [customersPerPage, setCustomersPerPage] = useState(15);
  const indexOfLastCustomer = currentCustomerPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = allCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );
  useEffect(() => {
    if (user) {
      const displayCustomers = async () => {
        const data = await getAllCustomers(token);
        setCustomer(data);

        setAllCustomers(data);
      };
      displayCustomers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        currentCustomer,
        setCurrentCustomer,
        customer,
        setCustomer,
        currentCustomers,
        customersPerPage,
        setCustomersPerPage,
        currentCustomerPage,
        setCurrentCustomerPage,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerProvider;
