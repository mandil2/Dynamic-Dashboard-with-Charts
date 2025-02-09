/**
 * Defines the structure for monthly revenue and profit data
 * @interface ComboChartData
 * @property {string} month - The name of the month
 * @property {number} revenue - Monthly revenue value
 * @property {number} profit - Monthly profit value
 */
export interface ComboChartData {
  month: string;
  revenue: number;
  profit: number;
}

/**
 * Defines the structure for category-wise sales distribution
 * @interface DonutChartData
 * @property {string} category - Product category name
 * @property {number} value - Sales percentage for the category
 */
export interface DonutChartData {
  category: string;
  value: number;
}

/**
 * Defines the structure for month range filter
 * @interface MonthRange
 * @property {number} startMonth - Starting month index (0-11)
 * @property {number} endMonth - Ending month index (0-11)
 */
export interface MonthRange {
  startMonth: number;
  endMonth: number;
}
