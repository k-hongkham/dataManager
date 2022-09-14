import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../hooks/userAuth";
import useCustomer from "../hooks/useCustomer";
import { deleteCustomer, getAllCustomers } from "../../axios";
import { toast } from "react-toastify";

const DeleteCustomer = ({ customer, setAllCustomers }) => {
  const { token } = useAuth();
  const { setCustomerError } = useCustomer();
  const handleDeleteCustomer = async (e) => {
    e.preventDefault();

    try {
      const response = await deleteCustomer(token, customer.id);
      const customerList = await getAllCustomers(token);
      setAllCustomers(customerList);
      setCustomerError(false);
      successToast();
      return response;
    } catch (error) {
      setCustomerError(true);
      failureToast(error.message);
    }
  };
  const successToast = (e) => {
    toast.success("Customer deleted!", { theme: "colored" });
  };
  const failureToast = (error) => {
    toast.error(error, { theme: "colored" });
  };
  return (
    <div>
      <form onSubmit={handleDeleteCustomer}>
        <Button type="submit" variant="danger">
          Delete Customer
        </Button>
      </form>
    </div>
  );
};

export default DeleteCustomer;
