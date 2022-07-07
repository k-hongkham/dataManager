import React, { useState } from "react";
import useAuth from "../hooks/userAuth";

const Directory = () => {
  const { user, token } = useAuth();
  const [contacts, setContacts] = useState([]);
  return <div>People</div>;
};

export default Directory;
