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
    accessCustomers,
    setAccessCustomers,
    customer,
    setCustomer,
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
    accessCustomers,
    setAccessCustomers,
    customer,
    setCustomer,
  };
};

export default useCustomer;
