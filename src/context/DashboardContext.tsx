import React, { createContext, useContext, useState, ReactNode } from "react";
import { MonthRange, ComboChartData } from "../types/types";
import { comboChartData } from "../data/sampleData";

/**
 * Type definition for the Dashboard context
 * Includes all shared state and functions
 */
interface DashboardContextType {
  monthRange: MonthRange;
  setMonthRange: (range: MonthRange) => void;
  filteredData: ComboChartData[];
  resetFilter: () => void;
}

// Create context with undefined as initial value
const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

/**
 * Dashboard context provider component
 * Manages shared state for month range filtering and data
 * @param {ReactNode} children - Child components that will have access to the context
 */
export const DashboardProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // State for managing selected month range
  const [monthRange, setMonthRange] = useState<MonthRange>({
    startMonth: 0,
    endMonth: 11,
  });

  // Filter data based on selected month range
  const filteredData = comboChartData.slice(
    monthRange.startMonth,
    monthRange.endMonth + 1
  );

  // Reset filter to show all months
  const resetFilter = () => {
    setMonthRange({ startMonth: 0, endMonth: 11 });
  };

  return (
    <DashboardContext.Provider
      value={{ monthRange, setMonthRange, filteredData, resetFilter }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

/**
 * Custom hook for accessing dashboard context
 * Includes type checking and error handling
 * @throws {Error} If used outside of DashboardProvider
 */
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
