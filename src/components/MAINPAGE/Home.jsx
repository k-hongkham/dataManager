import React from "react";

const Home = () => {
  return (
    <div className="container-xxl bd-gutter masthead-followup">
      <div
        className="col-lg-12 mx-auto pb-3 mb-3 mb-md-5 text-md-center"
        style={{ border: "3px solid black" }}
      >
        <h2 className="display-5 mb-3 fw-semibold lh-sm">
          This section will eventually hold sales data. Work in Progress
        </h2>
        <p className="lead fw-normal">
          The idea is to take sales numbers and have something like chart.js
          automatically update the chart with new total values as they're
          entered into the db.
        </p>
        <p className="d-flex justify-content-md-start justify-content-md-center lead fw-normal">
          There will also be a link here to show individual data points and more
          detailed information
        </p>
      </div>
      <div className="row g-2 justify-content-between">
        <div className="col-lg-6" style={{ border: "3px solid black" }}>
          <h3>We'll also have a list of shortcuts</h3>
          <p>for ease of navigation to correct forms</p>
          <div className="bd-code-snippet highlight">
            <dl>
              <dt>Forms</dt>
              <dd> - Returns</dd>
              <dd> - Corrective Actions</dd>
              <dd> - Research</dd>
              <dt>Notes</dt>
              <dd> - Meetings</dd>
              <dd> - Sales</dd>
              <dd> - Projects</dd>
            </dl>
          </div>
        </div>
        <div
          className="col-lg-6"
          style={{
            border: "3px solid black",
          }}
        >
          <h3>Maybe a progress list for most recent projects</h3>
          <p>selectable specific projects</p>
          <div className="bd-code-snippet highlight">
            <dl>
              <dt>Sales</dt>
              <dd> >>> Orders</dd>
              <dd> >>> New Prospects</dd>
              <dd> >>> Obstacles</dd>
              <dt>Research</dt>
              <dd> >>> New Products</dd>
              <dd> >>> Optimization</dd>
              <dd> >>> Customer Issues</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
