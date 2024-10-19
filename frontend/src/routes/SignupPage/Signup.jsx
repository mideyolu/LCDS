import React, { useState, useEffect } from "react";
import { signup as apiSignup } from "../../api/Api"; // Import the signup function
import FormComponent from "../../components/FormAuth/FormComponent";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader"; // Import Loader component

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
  const navigate = useNavigate(); // For navigation after signup

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading to true when the form is submitted

    try {
      const response = await apiSignup(username, email, password); // Call signup function from your API
      setMessage(
        `Welcome, ${response.username}! Your account has been created successfully.`
      );

      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify(response));

      navigate("/dashboard"); // Navigate to the home page after successful signup
    } catch (error) {
      console.error(error); // Log the error for debugging
      setMessage("Signup failed. Please try again."); // Display error message
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
    <FormComponent imageSrc="/signup.jpg" altText="Signup illustration">
      <form className="signup-form" method="post" onSubmit={handleSubmit}>
        <h5>Signup</h5>
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
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Correctly update email state
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
            {loading ? <Loader /> : "Signup"} {/* Show loader or "Signup" */}
          </button>
          <p className="link">
            Have an account? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </form>
    </FormComponent>
  );
};

export default Signup;
