import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import { Modal } from "react-bootstrap";
import LoginForm from "./LoginForm";

const Login = ({ loggedIn, setLoggedIn }) => {
  const { registered, setRegistered } = useLogin();
  return (
    <Modal
      show={loggedIn}
      onHide={() => {
        setLoggedIn(false);
      }}
    >
      <LoginForm />
    </Modal>
  );
};

export default Login;
