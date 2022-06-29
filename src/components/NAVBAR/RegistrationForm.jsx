import React from "react";
import useLogin from "../hooks/useLogin";
import userAuth from "../hooks/userAuth";
import { registerUser } from "../../axios";

const RegistrationForm = ({
  loggedIn,
  setLoggedIn,
  registered,
  setRegistered,
}) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    setError,
    errorMessage,
    setErrorMessage,
  } = useLogin();
  const { setToken } = userAuth();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      if (password === confirmPassword && password.length > 0) {
        const response = await registerUser(email, password);
        setError(false);
        localStorage.setItem("token", response.token);
        setToken(response.token);
        setLoggedIn(false);
      } else {
        setError(true);
        setErrorMessage(true);
      }
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
    }
  };
  return <div></div>;
};

export default RegistrationForm;
