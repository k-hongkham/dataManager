import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import { Modal } from "react-bootstrap";
import LoginForm from "./LoginForm";

const Login = ({ loggedIn, setLoggedIn }) => {
  return (
    <Modal
      show={loggedIn}
      onHide={() => {
        setLoggedIn(false);
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <LoginForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </Modal>
  );
};

export default Login;
