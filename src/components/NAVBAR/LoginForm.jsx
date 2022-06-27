import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { loginUser } from "../../axios";
import useAuth from "../hooks/userAuth";
import useLogin from "../hooks/useLogin";

const LoginForm = () => {
  const { setToken } = useAuth();
  const {
    email,
    setEmail,
    password,
    setPassword,
    setLoggedIn,
    setError,
    setErrorMessage,
  } = useLogin();

  const handleLogin = async (e) => {
    try {
      const response = await loginUser(email, password);
      setError(false);
      localStorage.setItem("token", response.token);
      setToken(response.token);
      setLoggedIn(false);
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
    }
  };
  return (
    <Modal
      className="modal-content rounded-5 shadow"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained--modal-title-vcenter">
          Please Log In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>TestTest</h4>
      </Modal.Body>
    </Modal>
  );
};

export default LoginForm;
