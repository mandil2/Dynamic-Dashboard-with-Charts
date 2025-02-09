/**
 * Combination chart component
 * Displays revenue as bars and profit as a line
 * Uses Chart.js for rendering
 */
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useDashboard } from "../../context/DashboardContext";
import "./ComboChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ComboChart: React.FC = () => {
  const { filteredData } = useDashboard();

  // Chart.js data configuration
  const data = {
    labels: filteredData.map((item) => item.month),
    datasets: [
      {
        type: "bar" as const,
        label: "Revenue",
        data: filteredData.map((item) => item.revenue),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y",
      },
      {
        type: "line" as const,
        label: "Profit",
        data: filteredData.map((item) => item.profit),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
    ],
  };

  // Chart.js options configuration
  const options = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      title: {
        display: true,
        text: "Revenue and Profit by Month",
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
        title: {
          display: true,
          text: "Amount ($)",
        },
      },
    },
  };

  return (
    <div className="combo-chart">
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default ComboChart;
