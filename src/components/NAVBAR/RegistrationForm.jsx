import React from "react";
import useLogin from "../hooks/useLogin";
import userAuth from "../hooks/userAuth";

const RegistrationForm = () => {
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

  const handleRegistration = async(e) => {
    e.preventDefault()
    try {
        if( password === confirmPassword && password.length >0) {
            const response = await 
        })
    } catch (error) {
        
    }
  }
  return <div></div>;
};

export default RegistrationForm;
