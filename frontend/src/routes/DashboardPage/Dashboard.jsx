// Dashboard.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from local storage
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={handleLogout}>Logout</button>
      <Link to={'/detect'}>Detect</Link>
    </div>
  );
};

export default Dashboard;
