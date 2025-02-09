/**
 * Donut chart component
 * Displays sales distribution across product categories
 * Uses Chart.js for rendering
 */

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { donutChartData } from "../../data/sampleData";
import "./DonutChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart: React.FC = () => {
  // Chart data configuration
  const data = {
    labels: donutChartData.map((item) => item.category),
    datasets: [
      {
        data: donutChartData.map((item) => item.value),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options configuration
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Sales Distribution by Category",
      },
      legend: {
        position: "right" as const,
      },
    },
  };

  return (
    <div className="donut-chart">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
