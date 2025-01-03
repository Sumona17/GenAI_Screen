import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Login.css"; // Import corresponding CSS file

const Login = ({ onLogin }) => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (onLogin) {
      onLogin(); // Trigger the login callback if provided
    }
    navigate("/dashboard/default"); // Navigate to the desired path
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleLogin}>
          {/* Username Input */}
          <div className="input-group">
            <input
              type="text"
              placeholder="Type your username"
              className="login-input"
            />
            <span className="input-icon">&#128100;</span>
          </div>
          {/* Password Input */}
          <div className="input-group">
            <input
              type="password"
              placeholder="Type your password"
              className="login-input"
            />
            <span className="input-icon">&#128274;</span>
          </div>
          {/* Forgot Password */}
          <div className="password-links">
            <a href="#forgot" className="link">
              Forgot password?
            </a>
          </div>
          {/* Submit Button */}
          <button type="submit" className="submit-button">
            LOGIN
          </button>
        </form>
        {/* Social Media Login */}
        <p>Or Sign Up Using</p>
        <div className="social-login">
          <img src="facebook-icon.png" alt="Facebook" />
          <img src="twitter-icon.png" alt="Twitter" />
          <img src="google-icon.png" alt="Google" />
        </div>
        {/* Sign-Up Section */}
        <p>Or Sign Up Using</p>
        <a href="#signup" className="link">
          SIGN UP
        </a>
      </div>
    </div>
  );
};

export default Login;
