import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/userAuth";
import useLogin from "../hooks/useLogin.js";
<<<<<<< HEAD
import { getAllUsers, updateUserInfo } from "../../axios";

const UpdateContact = ({ userEditModal, setUserEditModal, contact }) => {
=======
import { getAllUsers, updateUser } from "../../axios";

const UpdateContact = ({ userEditModal, setUserEditModal }) => {
>>>>>>> 43a0d6ac7a7ae42129708783c906937ac63fce10
  const {
    email,
    firstName,
    lastName,
    department,
    position,
    officeNumber,
    setEmail,
    setFirstName,
    setLastName,
    setDepartment,
    setPosition,
    setOfficeNumber,
  } = useLogin();
  const { user, token, allUsers, setAllUsers, setUser } = useAuth();

  const handleUpdateUserInfo = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    const updatedUserInfo = await updateUserInfo(
      token,
      contact.id,
=======
    const updatedUserInfo = await updateUser(
      token,
      user.id,
>>>>>>> 43a0d6ac7a7ae42129708783c906937ac63fce10
      email,
      firstName,
      lastName,
      department,
      position,
      officeNumber
    );
<<<<<<< HEAD
    console.log("handle update customer", updateUserInfo);
=======
    console.log("handle update customer", user.id);
>>>>>>> 43a0d6ac7a7ae42129708783c906937ac63fce10
    setUser(updatedUserInfo);

    const updatedUserListing = await getAllUsers(token);
    setAllUsers(updatedUserListing);
  };

  return (
    <div>
      <header className="modal-header p-5 pb-4 border-bottom-0">
<<<<<<< HEAD
        <h2 className="fw-bold mb-0">Update User Information{contact.id}</h2>
=======
        <h2 className="fw-bold mb-0">Update User Information{user.id}</h2>
>>>>>>> 43a0d6ac7a7ae42129708783c906937ac63fce10
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={() => {
            setUserEditModal(false);
          }}
        ></button>
      </header>
      <div className="modal-body p-5 pt-0">
        <form onSubmit={handleUpdateUserInfo}>
          <div className="form-floating mb-3">
            <input
              className="form-control rounded-4"
              type="text"
              id="updateUserEmail"
              name="updateUserEmail"
              placeholder="User Contact"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
<<<<<<< HEAD
            <label htmlFor="updateUserEmail">Email:</label>
=======
            <label htmlFor="updateUserEmail">First Name:</label>
>>>>>>> 43a0d6ac7a7ae42129708783c906937ac63fce10
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control rounded-4"
              type="text"
              id="updateUserFirstName"
              name="updateUserFirstName"
              placeholder="Customer's Representative"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            />
            <label htmlFor="updateUserFirstName">First Name:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control rounded-4"
              type="text"
              id="updateUserLastName"
              name="updateUserLastName"
              placeholder="OurSalesRepresentative"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
            <label htmlFor="updateUserLastName">Last Name: </label>
          </div>
          <div className="form-group form-floating mb-3 ">
            <input
              className="form-control rounded-4  "
              id="updateUserDepartment"
              name="updateUserDepartment"
              placeholder="What does this company do?"
              rows={10}
              style={{ height: "100px", overflowY: "hidden" }}
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
              required
            ></input>

            <label htmlFor="updateUserDepartment">Department:</label>
          </div>
<<<<<<< HEAD
          <div className="form-floating mb-3 ">
            <input
              className="form-control rounded-4  "
              type="text"
              id="updateUserPosition"
              name="updateUserPosition"
              placeholder="What does this company need?"
=======
          <div className="form-group form-floating mb-3 ">
            <input
              className="form-control rounded-4  "
              id="updateUserPosition"
              name="updateUserPosition"
              placeholder="What does this company need?"
              rows={10}
              style={{ height: "100px", overflowY: "hidden" }}
>>>>>>> 43a0d6ac7a7ae42129708783c906937ac63fce10
              value={position}
              onChange={(e) => {
                setPosition(e.target.value);
              }}
              required
            ></input>
            <label htmlFor="updateUserPosition">Position:</label>
          </div>
          <div className="form-group form-floating mb-3 ">
            <input
              className="form-control rounded-4"
              type="text"
              id="updateUserOfficeNumber"
              name="updateUserOfficeNumber"
              placeholder="Our Sale's Representative"
              value={officeNumber}
              onChange={(e) => {
                setOfficeNumber(e.target.value);
              }}
              required
            />
            <label htmlFor="updateUserOfficeNumber">Office Number:</label>
          </div>
          <button
            className="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateContact;
