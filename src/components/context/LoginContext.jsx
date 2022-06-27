import React, { useState } from "react";
import { loginUser } from "../../axios";

export const LoginContext = React.createContext();

const LoginProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

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
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
