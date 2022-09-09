import React, { useState } from "react";
import { Button } from "react-bootstrap";

import useLogin from "../hooks/useLogin";

import ContactCard from "./ContactCard";
import UpdateContact from "./UpdateContact";
import Pagination from "../Pagination";

const Directory = ({
  contactsList,
  listItemsPerPage,
  totalUsers,
  setCurrentPage,
  currentPage,
  setContactsList,
  setListItemsPerPage,
}) => {
  const { currentDirectoryContact, setCurrentDirectoryContact } = useLogin();

  const [userEditModal, setUserEditModal] = useState(false);

  const handleUpdateModalOpen = async (e, modalContact) => {
    e.preventDefault();
    setUserEditModal(true);
    setCurrentDirectoryContact(modalContact);
  };

  return (
    <div className="container mx-auto pb-3 mb-3 mb-md-5 mt-4">
      <Button variant="primary">New Contact +</Button>
      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0"> Company Directory</h6>

        <div className="row justify-content-center mx-auto pb-3 mb-3 mb-md-5 mt-4">
          {contactsList.map((contact, idx) => {
            return (
              <div
                key={`allContacts: ${idx}`}
                className="col-sm-6 col-md-4 col-xl-3 mb-3 me-md-3  "
                style={{ border: "1px solid black" }}
              >
                <ContactCard contact={contact} />
                <Button
                  variant="info"
                  onClick={(e) => {
                    handleUpdateModalOpen(e, contact);
                  }}
                >
                  Update {contact.id}
                </Button>
                {userEditModal ? (
                  <UpdateContact
                    contact={contact}
                    userEditModal={userEditModal}
                    setUserEditModal={setUserEditModal}
                    currentDirectoryContact={currentDirectoryContact}
                    contactsList={contactsList}
                    setContactsList={setContactsList}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
      {contactsList.length ? (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          listItemsPerPage={listItemsPerPage}
          setListItemsPerPage={setListItemsPerPage}
          totalUsers={totalUsers}
        />
      ) : null}
    </div>
  );
};

export default Directory;
