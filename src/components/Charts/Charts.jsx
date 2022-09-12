import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import revenueData from "./revenueData.js";
import { Chart as ChartJS } from "chart.js/auto";

const Charts = () => {
  const [data, setdata] = useState({
    labels: revenueData.map((data) => data.Year),
    datasets: [
      {
        label: "Revenue",
        data: revenueData.map((data) => data.Profits),
      },
    ],
  });
  return (
    <div className="App">
      <Bar data={data} />
    </div>
  );
};

export default Charts;
