import React from "react";
import useLogin from "../hooks/useLogin";
import { Modal } from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const Login = ({ loggedIn, setLoggedIn }) => {
  const { registered, setRegistered } = useLogin();
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
      {" "}
      {registered ? (
        <RegistrationForm
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          registered={registered}
          setRegistered={setRegistered}
        />
      ) : (
        <LoginForm
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          registered={registered}
          setRegistered={setRegistered}
        />
      )}
    </Modal>
  );
};

export default Login;
