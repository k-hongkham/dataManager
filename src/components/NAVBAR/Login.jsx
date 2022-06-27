import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const Login = ({ loggedIn, setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  return (
    <Modal
      show={loggedIn}
      onHide={() => {
        setLoggedIn(false);
      }}
    ></Modal>
  );
};

export default Login;
