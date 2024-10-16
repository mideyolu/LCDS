import React, { useState } from "react";
import { login } from "../../api/Apis"; // Ensure you have a login API function
import { useNavigate, Link } from "react-router-dom";

const LoginFormAuth = ({ setMessage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // For navigation after login

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await login(username, password); // Call login function from your API
      setMessage(`Welcome back, ${response.username}!`);
      navigate("/detect"); // Navigate to the home page after successful login
    } catch (error) {
      console.error(error); // Log the error for debugging
      setMessage("Login failed. Please check your credentials."); // Display error message
    }
  };

  return (
    <div className="content">
      <>
        <h5>Login</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update state on input change
            required
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
            required
          />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
        <p className="account">
          Don't Have An Account? <Link to="/signup">Register</Link>
        </p>
      </>
    </div>
  );
};

export default LoginFormAuth;
