/**
 * Main dashboard component
 * Assembles all dashboard components and manages layout
 */
import React from "react";
import ComboChart from "../ComboChart/ComboChart";
import DonutChart from "../DonutChart/DonutChart";
import MonthRangeFilter from "../MonthRangeFilter/MonthRangeFilter";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Sales Dashboard</h1>
      <MonthRangeFilter />
      <div className="charts-container">
        <div className="chart-wrapper">
          <ComboChart />
        </div>
        <div className="chart-wrapper">
          <DonutChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
