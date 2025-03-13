import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import UsersCard from "@/components/ui/UserCard";
import BarChartComponent from "@/components/Charts/BarChartComponent";
import PieChartComponent from "@/components/Charts/PieChartComponent";

const Home = () => {
  const [stats, setStats] = useState({ users: 0, sectors: {} });
  const router = useRouter();

  useEffect(() => {

  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UsersCard  onClick={() => router.push("/users")} />
      <div onClick={() => router.push("/analysis")} className="cursor-pointer">
        <BarChartComponent  />
      </div>
      <div onClick={() => router.push("/analysis")} className="cursor-pointer">
        <PieChartComponent  />
      </div>
    </div>
  );
};

export default Home;
