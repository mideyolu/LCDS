import "./login.scss";
import React, { useState, useEffect } from "react"; // Import useEffect for handling side effects
import LoginFormAuth from "../../components/FormAuth/LoginFormAuth"; // Import the LoginFormAuth component

function Login() {
  const [message, setMessage] = useState(""); // Message state for feedback

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
    <div className="login-form">
      <div className="container">
        <div className="main">
          <LoginFormAuth setMessage={setMessage} />{" "}
          {/* Pass setMessage to the form */}
          <div className="form-img">
            <img src="/Login.jpg" alt="Login Background" />
          </div>
        </div>
        {message && <div className="popup-message">{message}</div>}{" "}
        {/* Display message popup */}
      </div>
    </div>
  );
}

export default Login;
