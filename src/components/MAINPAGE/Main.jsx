import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import useAuth from "../hooks/userAuth";
import useCustomer from "../hooks/useCustomer";
import { getAllUsers } from "../../axios";
import Home from "./Home";
import Customers from "../CUSTOMERS/Customers";
import Directory from "../DIRECTORY/Directory";
import FullCustomerDescription from "../CUSTOMERS/FullCustomerDescription";

const Main = () => {
  const { user, allUsers, token } = useAuth();
  const { customers } = useCustomer();
  const [contactsList, setContactsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [listItemsPerPage, setListItemsPerPage] = useState(16);

  useEffect(() => {
    const getContacts = async () => {
      const contacts = await getAllUsers(token);

      setContactsList(contacts);
    };

    getContacts();
  }, []);

  const indexOfLastUser = currentPage * listItemsPerPage;
  const indexOfFirstUser = indexOfLastUser - listItemsPerPage;
  const currentUsers = contactsList.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="main">
      <Routes>
        <Route path="/Customers" element={<Customers />} />
        <Route
          path="/Users"
          element={
            <Directory
              contactsList={currentUsers}
              listItemsPerPage={listItemsPerPage}
              totalUsers={contactsList.length}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path={`/ViewCustomer/:id`}
          element={<FullCustomerDescription />}
        />
      </Routes>
    </div>
  );
};

export default Main;
