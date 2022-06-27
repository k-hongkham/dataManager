import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const useLogin = () => {
  const {
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
  } = useContext(LoginContext);

  return {
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
  };
};

export default useLogin;
