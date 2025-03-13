import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersCard = ({ onClick }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/users") // Fixed missing forward slash
      .then((response) => {
        console.log("Fetched users:", response.data); // Log retrieved data
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError("Failed to load users. Please try again.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Registered Users</h2>

      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Sector</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border cursor-pointer" onClick={() => onClick(user)}>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.sector}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersCard;
