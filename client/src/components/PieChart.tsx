import { useState, useEffect } from "react";
import { AgCharts } from "ag-charts-react";
import auth from "../utils/auth";

const PieChart = () => {
  const [options, setOptions] = useState({
    data: [],
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
  });
  const [calories, setCalories] = useState(0); // State for calories
  const userId = auth.getProfile()?.id;

  useEffect(() => {
    const fetchBodyInfo = async () => {
      try {
        const response = await fetch(`/api/bodyInfo/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch body info");
        }
        const data = await response.json();
        console.log(data);

        const { protein, fat, carbs, calories } = data;
        console.log(protein);
        setOptions({...options, data: [{asset: "Protein", amount: protein}, {asset: "Fat", amount: fat}, {asset: "Carbs", amount: carbs}] } as any);

        setCalories(calories);
      } catch (error) {
        console.error("Error fetching body info:", error);
      }
    };

    if (userId) {
      fetchBodyInfo();
    }
  }, [userId]);

  return (
    <div>
      <AgCharts options={options as any}/>
      <div>
        <h3>Total Calories: {calories}</h3>
      </div>
    </div>
  );
};

export default PieChart;
