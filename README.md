# Sales Dashboard

A responsive dashboard built with React, TypeScript, and Chart.js that displays sales analytics through interactive charts.

## Features

- **Combination Chart**: Displays revenue (bar) and profit (line) data over time
- **Donut Chart**: Shows sales distribution across product categories
- **Interactive Filtering**: Filter data by selecting date ranges
- **Responsive Design**: Works seamlessly across different screen sizes
- **TypeScript Support**: Full type safety throughout the application

## Installation

1. Clone the repository:
```bash
git clone https://github.com/mandil2/Dynamic-Dashboard-with-Charts.git
cd Dynamic-Dashboard-with-Charts
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

To start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Project Structure

```
dashboard-app/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   ├── ComboChart/
│   │   ├── DonutChart/
│   │   └── MonthRangeFilter/
│   ├── context/
│   ├── data/
│   ├── types/
│   └── utils/
└── package.json
```

## Dependencies

- React
- TypeScript
- Chart.js
- react-chartjs-2
