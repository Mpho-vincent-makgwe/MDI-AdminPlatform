import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UsersCard from "./components/UsersCard";
import BarChartComponent from "./components/BarChartComponent";
import PieChartComponent from "./components/PieChartComponent";

const Home = () => {
  const [stats, setStats] = useState({ users: 0, sectors: {} });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://your-mongodb-api.com/stats")
      .then((response) => setStats(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UsersCard users={stats.users} onClick={() => navigate("/users")} />
      <div onClick={() => navigate("/analysis")} className="cursor-pointer">
        <BarChartComponent data={stats.sectors} />
      </div>
      <div onClick={() => navigate("/analysis")} className="cursor-pointer">
        <PieChartComponent data={stats.sectors} />
      </div>
    </div>
  );
};

export default Home;
