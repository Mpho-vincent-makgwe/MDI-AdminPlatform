import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/stats")
      .then((response) => {
        const chartData = Object.keys(response.data.sectors).map((sector, index) => ({
          name: sector,
          value: response.data.sectors[sector],
          color: COLORS[index % COLORS.length],
        }));
        setData(chartData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold">Sector Breakdown</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={80}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
