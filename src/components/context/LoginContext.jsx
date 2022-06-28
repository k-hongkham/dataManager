import React, { useState, useEffect } from "react";

export const LoginContext = React.createContext();

const LoginProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
