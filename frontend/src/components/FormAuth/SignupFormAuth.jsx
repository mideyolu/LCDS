import React, { useState } from "react";
import { signup } from "../../api/Apis"; // Ensure you have a signup API function
import { useNavigate, Link } from "react-router-dom";

const SignupFormAuth = ({ setMessage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // For navigation after signup

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await signup(username, password); // Call signup function from your API
      setMessage(
        `Welcome, ${response.username}! Your account has been created successfully.`
      );
      navigate("/detect"); // Navigate to the home page after successful signup
    } catch (error) {
      console.error(error); // Log the error for debugging
      setMessage("Signup failed. Please try again."); // Display error message
    }
  };

  return (
    <div className="content">
      <>
        <h5>Signup</h5>
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
            Register
          </button>
        </form>
        <p className="account">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </>
    </div>
  );
};

export default SignupFormAuth;
