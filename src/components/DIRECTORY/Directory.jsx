import React, { useEffect, useState } from "react";

import useAuth from "../hooks/userAuth";
import { getAllUsers } from "../../axios";
import ContactCard from "./ContactCard";
import UpdateContact from "./UpdateContact";

const Directory = () => {
  const { token } = useAuth();
  const [contactsList, setContactsList] = useState([]);
  const [userEditModal, setUserEditModal] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      const contacts = await getAllUsers(token);
      setContactsList(contacts);
    };
    getContacts();
  }, [token]);
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
              <UpdateContact
                contact={contact}
                userEditModal={userEditModal}
                setUserEditModal={setUserEditModal}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Directory;
