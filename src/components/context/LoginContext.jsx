import React, { useState, useEffect } from "react";
import useAuth from "../hooks/userAuth";
export const LoginContext = React.createContext();

const LoginProvider = ({ children }) => {
  const { user, token } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState(user.department);

  useEffect(() => {
    setError(false);
  }, []);

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
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
