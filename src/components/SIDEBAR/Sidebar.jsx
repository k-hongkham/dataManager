import React from "react";
import useAuth from "../hooks/userAuth";
import useLogin from "../hooks/useLogin";
import Login from "../NAVBAR/Login";
import LoginBtn from "../NAVBAR/LoginBtn";

const Sidebar = () => {
  const { user } = useAuth();
  const { loggedIn, setLoggedIn } = useLogin();
  return (
    <div
      className="sideBarContainer col-md-2 col-lg-2 d-md-block bg-light sidebar collapse"
      style={{ width: "250px" }}
    >
      <div className="position-sticky pt-3" style={{ height: "100vh" }}>
        <div className="d-flex flex-column p-3 bg-light">
          <ul>
            {/* <ul
              className="dropdown-item d-flex gap-2 py-2 "
              style={{ borderBottom: "2px solid gray" }}
            >
              SALES ACCOUNTS
            </ul>

            <ul
              className="dropdown-item d-flex gap-2 py-2 "
              style={{ borderBottom: "2px solid gray" }}
            >
              PRICE BOOK
            </ul> */}

            {/* <ul
              className="dropdown-item d-flex gap-2 py-2 "
              style={{ borderBottom: "2px solid gray" }}
            >
              CALENDAR
            </ul> */}

            <ul
              className="dropdown-item d-flex gap-2 py-2 "
              style={{ borderBottom: "2px solid gray" }}
            >
              CONTACT
            </ul>
            {/* 
            <ul
              className="dropdown-item d-flex gap-2 py-2 "
              style={{ borderBottom: "2px solid gray" }}
            >
              SETUP
            </ul> */}

            <ul
              className="dropdown-item d-flex  "
              style={{ borderBottom: "2px solid gray" }}
            >
              <LoginBtn setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
            </ul>
          </ul>
          {loggedIn && (
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
