import React, { useEffect, useState } from "react";
import axios from "axios";
import UsersCard from "@/components/ui/UserCard";
const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Registered Users</h2>
      <UsersPage users={users}/>
    </div>
  );
};

export default UsersPage;
