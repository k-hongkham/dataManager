import { useContext } from "react";
import { CustomerContext } from "../context/CustomerContext";

const useCustomer = () => {
  const {
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
    customer,
    setCustomer,
    currentCustomer,
    setCurrentCustomer,
  } = useContext(CustomerContext);

  return {
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
    customer,
    setCustomer,
    currentCustomer,
    setCurrentCustomer,
  };
};

export default useCustomer;
