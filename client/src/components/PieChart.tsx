// client/src/components/PieChart.jsx
import { useState } from "react";
import { AgCharts } from "ag-charts-react";

const PieChart = () => {
  // Dummy data for protein, fat, and carbs
  const [options] = useState({
    data: [
      { asset: "Protein", amount: 30 },
      { asset: "Fat", amount: 20 },
      { asset: "Carbs", amount: 50 },
    ],
    title: {
      text: "Nutritional Composition",
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        legendItemKey: "asset",
      },
    ],

  } as any);

  return <AgCharts options={options} />;
};

export default PieChart;
