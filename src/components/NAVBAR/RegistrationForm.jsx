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
  return (
    <div>
      <header className="modal-header p-5 pb-4 border-bottom-0">
        <h2 className="fw-bold mb-0">Sign Up</h2>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="close"
          onClick={() => {
            setLoggedIn(false);
          }}
        />
      </header>
      <div className="modal-body p-5 pt-0">
        <form>
          <div className="form-floating mb-3">
            <input
              className="form-control rounded-4"
              type="email"
              id="registrationFormEmail"
              name="registrationFormEmail"
              placeholder="name@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="registrationFormEmail">Email:</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
