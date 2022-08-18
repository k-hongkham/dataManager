import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import useAuth from "../hooks/userAuth";

import { getAllUsers } from "../../axios";
import Home from "./Home";
import Login from "../NAVBAR/Login";
import Customers from "../CUSTOMERS/Customers";
import Directory from "../DIRECTORY/Directory";
import FullCustomerDescription from "../CUSTOMERS/FullCustomerDescription";
import Projects from "../PROJECTS/Projects";

const Main = () => {
  const { token } = useAuth();

  const [contactsList, setContactsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [listItemsPerPage, setListItemsPerPage] = useState(15);

  useEffect(() => {
    const getContacts = async () => {
      const contacts = await getAllUsers(token);
      setContactsList(contacts);
    };
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              totalUsers={contactsList.length}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              setContactsList={setContactsList}
              setListItemsPerPage={setListItemsPerPage}
              listItemsPerPage={listItemsPerPage}
            />
          }
        />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Home" element={<Home />} />
        <Route path={`customers/:id`} element={<FullCustomerDescription />} />
      </Routes>
    </div>
  );
};

export default Main;
