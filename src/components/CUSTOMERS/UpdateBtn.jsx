import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../hooks/userAuth";
const { token } = useAuth();

const UpdateBtn = ({ customer, setAllCustomer }) => {
  return (
    <div>
      <form onSubmit={handleUpdateCustomer}>
        <Button type="submit" variant="danger">
          Delete Customer
        </Button>
      </form>
    </div>
  );
};

export default UpdateBtn;
