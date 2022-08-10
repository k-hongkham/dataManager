import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import useAuth from "../hooks/userAuth";
import useLogin from "../hooks/useLogin";

import { getAllUsers } from "../../axios";
import ContactCard from "./ContactCard";
import UpdateContact from "./UpdateContact";
import Pagination from "../Pagination";

const Directory = ({ contactsList, currentUsers }) => {
  const { token, allUsers } = useAuth();
  const { currentDirectoryContact, setCurrentDirectoryContact } = useLogin();

  // const [contactsList, setContactsList] = useState([]);
  const [userEditModal, setUserEditModal] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [listItemsPerPage, setListItemsPerPage] = useState(12);
  const totalUsers = allUsers;

  const handleUpdateModalOpen = async (e, modalContact) => {
    e.preventDefault();
    setUserEditModal(true);
    setCurrentDirectoryContact(modalContact);
    console.log("totalUsers:", currentUsers);
    console.log("contactsList:", contactsList);
  };

  // useEffect(() => {
  //   const getContacts = async () => {
  //     const contacts = await getAllUsers(token);
  //     setContactsList(contacts);
  //   };
  //   getContacts();
  // }, [allUsers]);

  // const indexOfLastUser = currentPage * listItemsPerPage;
  // const indexOfFirstUser = indexOfLastUser - listItemsPerPage;
  // const currentUsers = contactsList.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="container">
      <h6 className="border-bottom pb-2 mb-0"> Company Directory</h6>
      <Pagination totalUsers={totalUsers} />
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
                Update Contact {contact.id}
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
    </div>
  );
};

export default Directory;
