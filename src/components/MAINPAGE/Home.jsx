import React from "react";
import Charts from "../Charts/Charts";

const Home = () => {
  return (
    <div className="container-xxl bd-gutter masthead-followup">
      <div
        className="col-lg-12 mx-auto pb-3 mb-3 mb-md-5 text-md-center mt-4"
        style={{ border: "3px solid black" }}
      >
        <h2 className="display-5 mb-3 fw-semibold lh-sm">
          This section will eventually hold sales data. Work in Progress
        </h2>
        {/* <p className="lead fw-normal">
          The idea is to take sales numbers and have something like chart.js
          automatically update the chart with new total values as they're
          entered into the db.
        </p>
        <p className="d-flex justify-content-md-start justify-content-md-center lead fw-normal">
          There will also be a link here to show individual data points and more
          detailed information
        </p> */}
        <Charts chartData={}/>
      </div>
      <div className="d-md-flex flex-md-equal w-100 my-md-3  justify-content-around w-100 pt-1 p-3  ">
        <div
          className="col-lg-6 bg-dark me-md-4 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"
          style={{ border: "3px solid black" }}
        >
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
          className="col-lg-6 bg-light  pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
          style={{
            border: "3px solid black",
            margin: "0px !important",
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
