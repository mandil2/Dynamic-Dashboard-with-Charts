import React from "react";
import { useDashboard } from "../../context/DashboardContext";
import { months } from "../../utils/dateUtils";
import "./MonthRangeFilter.css";

/**
 * Month range filter component
 * Allows users to select start and end months for filtering data
 */
const MonthRangeFilter: React.FC = () => {
  const { monthRange, setMonthRange, resetFilter } = useDashboard();

  /**
   * Handle change in start month selection
   * Ensures end month is not before start month
   */
  const handleStartMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStartMonth = parseInt(e.target.value);
    setMonthRange({
      ...monthRange,
      startMonth: newStartMonth,
      endMonth: Math.max(newStartMonth, monthRange.endMonth),
    });
  };

  /**
   * Handle change in end month selection
   * Ensures start month is not after end month
   */
  const handleEndMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newEndMonth = parseInt(e.target.value);
    setMonthRange({
      ...monthRange,
      endMonth: newEndMonth,
      startMonth: Math.min(monthRange.startMonth, newEndMonth),
    });
  };

  // Component JSX
  return (
    <div className="month-range-filter">
      <div className="filter-group">
        <label htmlFor="startMonth">Start Month:</label>
        <select
          id="startMonth"
          value={monthRange.startMonth}
          onChange={handleStartMonthChange}
        >
          {months.map((month, index) => (
            <option key={month} value={index}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="endMonth">End Month:</label>
        <select
          id="endMonth"
          value={monthRange.endMonth}
          onChange={handleEndMonthChange}
        >
          {months.map((month, index) => (
            <option key={month} value={index}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <button onClick={resetFilter} className="reset-button">
        Reset Filter
      </button>
    </div>
  );
};

export default MonthRangeFilter;
