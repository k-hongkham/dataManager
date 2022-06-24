import React, { useState } from "react";
import useAuth from "../hooks/userAuth";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { user } = useAuth();

  return <div></div>;
};

export default Navbar;
