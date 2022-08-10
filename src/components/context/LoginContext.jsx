import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../axios";
import useAuth from "../hooks/userAuth";
export const LoginContext = React.createContext();

const LoginProvider = ({ children }) => {
  const { user, token } = useAuth();
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [department, setDepartment] = useState(user.department);
  const [position, setPosition] = useState("");
  const [officeNumber, setOfficeNumber] = useState("");
  const [currentDirectoryContact, setCurrentDirectoryContact] = useState({});

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setDepartment(user.department);
    setOfficeNumber(user.officeNumber);
    setPosition(user.position);
  }, [user]);

  return (
    <LoginContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        registered,
        setRegistered,
        loggedIn,
        setLoggedIn,
        error,
        setError,
        errorMessage,
        setErrorMessage,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        department,
        setDepartment,
        position,
        setPosition,
        officeNumber,
        setOfficeNumber,
        currentDirectoryContact,
        setCurrentDirectoryContact,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
