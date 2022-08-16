import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/userAuth";
import useCustomer from "../hooks/useCustomer";

import { getAllCustomers, getCustomerById, updateCustomer } from "../../axios";

const FullCustomerDescription = () => {
  let params = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const {
    setAllCustomers,
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
    setCustomer,
    customer,
    currentCustomer,
    setCurrentCustomer,
  } = useCustomer();

  // const handleUpdateCustomerInfo = async (e) => {
  //   e.preventDefault();

  //   const updatingCustomerInfo = await updateCustomer(
  //     token,
  //     currentCustomer.id,
  //     companyName,
  //     companyRep,
  //     salesRep,
  //     description,
  //     needs,
  //     prospectValue
  //   );
  //   console.log(
  //     "updated customer function customer ID: ",
  //     updatingCustomerInfo
  //   );
  //   setCustomer(updatingCustomerInfo);

  //   const updatedCustomerListing = await getAllCustomers(token);
  //   setAllCustomers(updatedCustomerListing);

  //   console.log("handle update customer", updatedCustomerListing);
  //   console.log("updated all customers", allCustomers);
  //   navigate("/Customers");
  // };

  const handleUpdateCustomerInfo = async (e) => {
    e.preventDefault();
    console.log("BEFORE checking customer", customer);
    console.log("BEFORE customer.id: ", customer.id);
    console.log("BEFORE companyName: ", companyName);
    console.log("BEFORE companyRep: ", companyRep);
    console.log("BEFORE salesRep: ", salesRep);
    console.log("BEFORE description: ", description);
    console.log("BEFORE needs: ", needs);
    console.log("BEFORE prospectValue: ", prospectValue);

    const updatedCustomerInfo = await updateCustomer(
      token,
      customer.id,
      companyName,
      companyRep,
      salesRep,
      description,
      needs,
      prospectValue
    );
    setCustomer(updatedCustomerInfo);
    console.log("checking customer", customer);

    console.log("updateCompanyInfo", updatedCustomerInfo);
    console.log("currentCustomer.id: ", currentCustomer.id);
    console.log("companyName: ", companyName);
    console.log("companyRep: ", companyRep);
    console.log("salesRep: ", salesRep);
    console.log("description: ", description);
    console.log("needs: ", needs);
    console.log("prospectValue: ", prospectValue);
    setCurrentCustomer(updatedCustomerInfo);

    const updatedCustomerListing = await getAllCustomers(token);
    console.log("getting all customers", updatedCustomerListing);
    setAllCustomers(updatedCustomerListing);
    navigate("/Customers");
  };
  useEffect(() => {
    setCompanyName(currentCustomer.companyName);
    setCompanyRep(currentCustomer.companyRep);
    setSalesRep(currentCustomer.salesRep);
    setDescription(currentCustomer.description);
    setNeeds(currentCustomer.needs);
    setProspectValue(currentCustomer.prospectValue);
    console.log("useEffect: currentCustomer", currentCustomer);
  }, [currentCustomer]);

  useEffect(() => {
    console.log("getting Customer by ID.", params.id);
    const getCustomer = async () => {
      const fetchedCustomer = await getCustomerById(token, params.id);
      console.log("defining customer for getById", fetchedCustomer);
      setCurrentCustomer(fetchedCustomer);
      setCustomer(fetchedCustomer);

      console.log("useEffect Customer:", fetchedCustomer);
    };
    getCustomer();
  }, []);

  return (
    <div className="form-group container mx-auto pb-3 mb-3 mb-md-5 mt-4">
      <header className="modal-header p-5 pb-4 border-bottom-0">
        <h2 className="fw-bold mb-0">
          {currentCustomer.companyName} Information
        </h2>
      </header>

      <form
        onSubmit={(e) => {
          handleUpdateCustomerInfo(e);
        }}
      >
        <div className="form-floating mb-3">
          <input
            className="form-control rounded-4 "
            type="text"
            id="updateCustomerFormName"
            name="updateCustomerFormName"
            placeholder="Customer'sCompanyName"
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
            required
          />
          <label htmlFor="updateCustomerFormName">Company Name: </label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control rounded-4"
            type="text"
            id="updateCustomerFormRepName"
            name="updateCustomerFormRepName"
            placeholder="Customer's Representative"
            value={companyRep}
            onChange={(e) => {
              setCompanyRep(e.target.value);
            }}
            required
          />
          <label htmlFor="updateCustomerFormRepName">
            Company Representative:
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control rounded-4"
            type="text"
            id="updateCustomerSalesRep"
            name="updateCustomerSalesRep"
            placeholder="OurSalesRepresentative"
            value={salesRep}
            onChange={(e) => {
              setSalesRep(e.target.value);
            }}
            required
          />
          <label htmlFor="updateCustomerSalesRep">Sales Representative: </label>
        </div>
        <div className="form-group form-floating mb-3 ">
          <textarea
            className="form-control rounded-4 d-flex  "
            id="updateCustomerDescription"
            name="updateCustomerDescription"
            placeholder="What does this company do?"
            rows={10}
            style={{ height: "100%", overflowY: "hidden" }}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          ></textarea>

          <label htmlFor="updateCustomerDescription">
            Company Description:
          </label>
        </div>
        <div className="form-group form-floating mb-3 ">
          <textarea
            className="multiple form-control rounded-4  "
            id="updateCustomerNeeds"
            name="updateCustomerNeeds"
            placeholder="What does this company need?"
            rows={10}
            style={{ height: "100px", overflowY: "hidden" }}
            value={needs}
            onChange={(e) => {
              setNeeds(e.target.value);
            }}
            required
          ></textarea>
          <label htmlFor="updateCustomerNeeds">Company Needs:</label>
        </div>
        <div className="form-group form-floating mb-3 ">
          <input
            className="form-control rounded-4"
            type="text"
            id="updateCustomerProspectValue"
            name="updateCustomerProspectValue"
            placeholder="Our Sale's Representative"
            value={prospectValue}
            onChange={(e) => {
              setProspectValue(e.target.value);
            }}
            required
          />
          <label htmlFor="updateCustomerProspectValue">Prospect Value:</label>
        </div>
        <button
          className="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default FullCustomerDescription;
