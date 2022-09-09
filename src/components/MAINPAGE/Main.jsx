import React from "react";
import { Routes, Route } from "react-router-dom";

import usePages from "../hooks/usePages";
import Home from "./Home";
import Customers from "../CUSTOMERS/Customers";
import Directory from "../DIRECTORY/Directory";
import FullCustomerDescription from "../CUSTOMERS/FullCustomerDescription";
import Projects from "../PROJECTS/Projects";
import NewProjectHeader from "../PROJECTS/NewProjectHeader";

const Main = () => {
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
        <Route path="/newProject" element={<NewProjectHeader />} />

        <Route path="/" element={<Home />} />
        <Route path={`customers/:id`} element={<FullCustomerDescription />} />
      </Routes>
    </div>
  );
};

export default Main;
