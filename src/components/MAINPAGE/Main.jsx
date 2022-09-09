import React from "react";
import { Routes, Route } from "react-router-dom";

import usePages from "../hooks/usePages";
import useCustomer from "../hooks/useCustomer";
import Home from "./Home";
import Customers from "../CUSTOMERS/Customers";
import Directory from "../DIRECTORY/Directory";
import FullCustomerDescription from "../CUSTOMERS/FullCustomerDescription";
import Projects from "../PROJECTS/Projects";
import NewProjectHeader from "../PROJECTS/NewProjectHeader";

const Main = () => {
  const {
    allCustomers,
    setAllCustomers,
    currentCustomers,
    customersPerPage,
    setCustomersPerPage,
    currentCustomerPage,
    setCurrentCustomerPage,
  } = useCustomer();
  const {
    contactsList,
    setContactsList,
    currentPage,
    setCurrentPage,
    listItemsPerPage,
    setListItemsPerPage,
    currentUsers,
  } = usePages();

  return (
    <div className="main">
      <Routes>
        <Route
          path="/Customers"
          element={
            <Customers
              totalCustomers={allCustomers.length}
              allCustomers={currentCustomers}
              setAllCustomers={setAllCustomers}
              customersPerPage={customersPerPage}
              setCustomersPerPage={setCustomersPerPage}
              currentCustomerPage={currentCustomerPage}
              setCurrentCustomerPage={setCurrentCustomerPage}
            />
          }
        />
        <Route
          path="/Users"
          element={
            <Directory
              contactsList={currentUsers}
              setContactsList={setContactsList}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              setListItemsPerPage={setListItemsPerPage}
              listItemsPerPage={listItemsPerPage}
              totalUsers={contactsList.length}
            />
          }
        />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/newProject" element={<NewProjectHeader />} />

        <Route path="/" element={<Home />} />
        <Route path={`customers/:id`} element={<FullCustomerDescription />} />
      </Routes>
    </div>
  );
};

export default Main;
