import "./form.scss";
import React, { useState, useEffect } from "react";
import { login as apiLogin } from "../../api/Api"; // Import the login function
import FormComponent from "../../components/FormAuth/FormComponent";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader"; // Import Loader component

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
  const navigate = useNavigate(); // For navigation after login

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading to true when the form is submitted

    try {
      const response = await apiLogin(username, password); // Call login function from your API
      setMessage(`Welcome back, ${response.username}!`);

      // Save user data to localStorage (assuming response contains token and user details)
      localStorage.setItem("user", JSON.stringify(response));

      navigate("/dashboard"); // Navigate to the home page after successful login
    } catch (error) {
      console.error(error); // Log the error for debugging
      setMessage("Login failed. Please check your credentials."); // Display error message
    } finally {
      setLoading(false); // Stop loading after the API call completes
    }
  };

  useEffect(() => {
    // If there is a message, set a timeout to clear it after 5 seconds
    if (message) {
      const timer = setTimeout(() => {
        setMessage(""); // Clear the message after 5 seconds
      }, 5000);

      // Cleanup the timer if the component unmounts or message changes
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <FormComponent imageSrc="/Login.jpg" altText="Login illustration">
      <form onSubmit={handleSubmit} method="post" className="login-form">
        <h5>Login</h5>
        {message && <div className="popup-message">{message}</div>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update state on input change
            disabled={loading} // Disable input when loading
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
            disabled={loading} // Disable input when loading
          />
        </div>
        <div className="btn">
          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? <Loader /> : "Login"} {/* Show loader or "Login" */}
          </button>
          <p className="link">
            Don't have an account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </div>
      </form>
    </FormComponent>
  );
};

export default Login;
