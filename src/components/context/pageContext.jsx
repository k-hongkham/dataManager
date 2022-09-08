import React, { useState } from "react";

export const PageContext = React.createContext();

const PageProvider = ({ children }) => {
  const [contactsList, setContactsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [listItemsPerPage, setListItemsPerPage] = useState(15);

  const indexOfLastUser = currentPage * listItemsPerPage;
  const indexOfFirstUser = indexOfLastUser - listItemsPerPage;
  const currentUsers = contactsList.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <PageContext.Provider
      value={{
        contactsList,
        setContactsList,
        currentPage,
        setCurrentPage,
        listItemsPerPage,
        setListItemsPerPage,
        currentUsers,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
