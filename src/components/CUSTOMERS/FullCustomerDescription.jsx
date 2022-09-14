import React, { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/userAuth";
import useCustomer from "../hooks/useCustomer";
import { toast } from "react-toastify";
import { getAllCustomers, getCustomerById, updateCustomer } from "../../axios";

const FullCustomerDescription = () => {
  let params = useParams();
  const navigate = useNavigate();
  const { token, user } = useAuth();
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
    setCustomer,
    setAllCustomers,
    customer,
  } = useCustomer();

  const handleUpdateCustomerInfo = async (e) => {
    e.preventDefault();

    console.log("companyName UPDATE: ", companyName);
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

    console.log("updatingCustomer: ", updatedCustomerInfo);
    setCustomer(updatedCustomerInfo);
    const updatedCustomerListing = await getAllCustomers(token);

    setAllCustomers(updatedCustomerListing);
    successToast();
    navigate("/customers");
  };

  useEffect(() => {
    setCompanyName(customer.companyName);
    setCompanyRep(customer.companyRep);
    setSalesRep(customer.salesRep);
    setDescription(customer.description);
    setNeeds(customer.needs);
    setProspectValue(customer.prospectValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer]);

  useEffect(() => {
    const getCustomer = async () => {
      const fetchedCustomer = await getCustomerById(token, params.id);
      console.log("fetching customer by id", fetchedCustomer);
      setCustomer(fetchedCustomer);
    };
    getCustomer();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const successToast = (e) => {
    toast.success("Customer Information Updated!", { theme: "colored" });
  };

  return (
    <div className="form-group container mx-auto pb-3 mb-3 mb-md-5 mt-4">
      <header className="modal-header p-5 pb-4 border-bottom-0">
        <h2 className="fw-bold mb-0">{customer.companyName} Information</h2>
      </header>

      <form onSubmit={handleUpdateCustomerInfo}>
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
