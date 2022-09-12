import React, {useState} from "react";
import { Bar } from "react-chartjs-2";
import {revenueData} from './revenueData.cjs'



const Charts = ({chartData}) => {
  const [data, setdata] =useState({
    labels: revenueData.map((year)=> data.Year),
    datasets: [{
      label: "Revenue Gained",
      data: revenueData.map((profits)=> data.Profits)
    }]
  })
  return <div className="App">
    <Bar data={chartData} options={}/>
  </div>;
};

export default Charts;
