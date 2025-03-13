import React, { useEffect, useState } from "react";
import axios from "axios";
import BarChartComponent from "../components/BarChartComponent";
import PieChartComponent from "../components/PieChartComponent";

const AnalysisPage = () => {
  const [data, setData] = useState({});

  useEffect(() => {

  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Sector Analysis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BarChartComponent  />
        <PieChartComponent  />
      </div>
    </div>
  );
};

export default AnalysisPage;
