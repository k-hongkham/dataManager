import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import revenueData from "./revenueData.js";
import Chart from "chart.js/auto";

const Charts = ({ bar, line, bubble }) => {
  const [data] = useState({
    labels: revenueData.map((data) => data.Month),
    datasets: [
      {
        label: "Profits",
        data: revenueData.map((data) => data.Profits),
        backgroundColor: ["green"],
      },
      {
        label: "Losses",
        data: revenueData.map((data) => data.Losses),
        backgroundColor: ["red"],
      },
    ],
  });
  return (
    <div className="App form-floating mb-3">
      {bar ? <Bar data={data} /> : null}
      {line ? <Line data={data} /> : null}
    </div>
  );
};

export default Charts;
