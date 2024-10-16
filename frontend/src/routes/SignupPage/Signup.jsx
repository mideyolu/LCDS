import "./Signup.scss";
import { useState, useEffect } from "react";
import SignupFormAuth from "../../components/FormAuth/SignupFormAuth"; // Import the SignupFormAuth component

const Signup = () => {
  const [message, setMessage] = useState("");

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
          <SignupFormAuth setMessage={setMessage} />{" "}
          <div className="form-img">
            <img src="/signup.jpg" alt="Signup Background" />
          </div>
        </div>
        {message && <div className="popup-message">{message}</div>}{" "}
        {/* Display message popup */}
      </div>
    </div>
  );
};

export default Signup;
