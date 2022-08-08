import React from "react";

const Sidebar = () => {
  return (
    <div
      className="sideBarContainer col-md-2 col-lg-2 d-md-block bg-light sidebar collapse"
      style={{ width: "250px" }}
    >
      <div className="position-sticky pt-3" style={{ height: "100vh" }}>
        <div className="d-flex flex-column p-3 bg-light">
          <ul>
            <ul
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
            </ul>

            <ul
              className="dropdown-item d-flex gap-2 py-2 "
              style={{ borderBottom: "2px solid gray" }}
            >
              CALENDAR
            </ul>

            <ul
              className="dropdown-item d-flex gap-2 py-2 "
              style={{ borderBottom: "2px solid gray" }}
            >
              NOTEBOOK
            </ul>

            <ul
              className="dropdown-item d-flex gap-2 py-2 "
              style={{ borderBottom: "2px solid gray" }}
            >
              SETUP
            </ul>

            <ul
              className="dropdown-item d-flex gap-2 py-2 "
              style={{ borderBottom: "2px solid gray" }}
            >
              LOGOUT
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
