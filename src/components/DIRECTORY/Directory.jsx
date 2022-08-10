import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import useAuth from "../hooks/userAuth";
import useLogin from "../hooks/useLogin";

import { getAllUsers } from "../../axios";
import ContactCard from "./ContactCard";
import UpdateContact from "./UpdateContact";
import Pagination from "../Pagination";

const Directory = ({
  contactsList,
  listItemsPerPage,
  totalUsers,
  setCurrentPage,
}) => {
  const { currentDirectoryContact, setCurrentDirectoryContact } = useLogin();

  const [userEditModal, setUserEditModal] = useState(false);

  const handleUpdateModalOpen = async (e, modalContact) => {
    e.preventDefault();
    setUserEditModal(true);
    setCurrentDirectoryContact(modalContact);
  };

  return (
    <div className="container">
      <h6 className="border-bottom pb-2 mb-0"> Company Directory</h6>

      <div className="row">
        {contactsList.map((contact, idx) => {
          return (
            <div
              key={`allContacts: ${idx}`}
              className="col-sm-6 col-md-4 col-xl-3 mb-3"
              style={{ border: "1px solid black" }}
            >
              <ContactCard contact={contact} />
              <Button
                variant="info"
                onClick={(e) => {
                  handleUpdateModalOpen(e, contact);
                }}
              >
                Update
              </Button>
              {userEditModal ? (
                <UpdateContact
                  contact={contact}
                  userEditModal={userEditModal}
                  setUserEditModal={setUserEditModal}
                  currentDirectoryContact={currentDirectoryContact}
                />
              ) : null}
            </div>
          );
        })}
      </div>
      <Pagination
        listItemsPerPage={listItemsPerPage}
        totalUsers={totalUsers}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Directory;
