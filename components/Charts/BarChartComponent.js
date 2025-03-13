import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const BarChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/stats")
      .then((response) => {
        const chartData = Object.keys(response.data.sectors).map((sector) => ({
          name: sector,
          count: response.data.sectors[sector],
        }));
        setData(chartData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold">Sector Distribution</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
