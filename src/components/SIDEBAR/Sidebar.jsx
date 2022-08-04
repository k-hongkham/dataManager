import React from "react";

const Sidebar = () => {
  return (
    <div className="sideBarContainer col-md-2 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3" style={{ height: "100vh" }}>
        <div className="d-flex flex-column p-3 bg-light">
          <ul>
            <ul className="link-dark rounded">TEST 1</ul>
            <ul className="border-top my-3"></ul>
            <ul>TEST 2</ul>
            <ul className="border-top my-3"></ul>
            <ul>TEST 3</ul>
            <ul className="border-top my-3"></ul>
            <ul>TEST 4</ul>
            <ul className="border-top my-3"></ul>
            <ul>TEST 5</ul>
            <ul className="border-top my-3"></ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
