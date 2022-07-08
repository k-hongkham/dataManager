import React from "react";

const ContactCard = ({ contact }) => {
  return (
    <div className="bg-white text-black h-80 rounded-lg shadow-md">
      <div className="text-center mt-5">
        <p className="text-gray-700 font-semi-bold text-xl mb-2">
          {contact.firstName} {contact.lastName}
        </p>
        <p className="text-gray-500">
          <span className="font-medium">Department: </span>
          {contact.department} - {contact.position}
        </p>
        <p className="text-gray-500">
          <span className="font-medium">Email: </span>
          {contact.email}
        </p>
        <p className="text-gray-500">
          <span className="font-medium">Office Number: </span>
          {contact.officeNumber}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
