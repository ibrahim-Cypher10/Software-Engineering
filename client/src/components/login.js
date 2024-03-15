import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";

import loginImage from "../assets/login_image.jpeg";

import Header from "./Header/header_logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigater = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Simulate API call for login
      const response = await axios.post("/api/login", { email, password });
      console.log("Login successful", response.data);

      const user_id = response.data.user_id;
      const user_type = response.data.user_type;

      localStorage.setItem("user_id", user_id);
      localStorage.setItem("user_type", user_type);

      // Fetch cart and save the id!!!!

      // Navigate to respective home page
      if (user_type === "Customer") {
        // fetch("/createcart", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(data.user_id),
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     if (data.error) {
        //       alert(data.error);
        //     } else {
        //       localStorage.setItem("cart_id", data._id);
        //     }
        //   });

        navigater("/home");
      } else if (user_type === "Vendor") {
        navigater("/home");
      } else if (user_type === "Manager") {
        navigater("/home");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data.error ||
            "Login Failed"
        );
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-left">
          <Header />
          <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
              <h2>Sign In to OLumsX</h2>
              {error && <div className="error-message">{error}</div>}
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="password-toggle">
                  <input
                    type="checkbox"
                    id="show-password"
                    checked={showPassword}
                    onChange={togglePasswordVisibility}
                  />
                  <label htmlFor="show-password">Show password</label>
                </span>
              </div>
              <a href="#" className="forgot-password">
                Forgot your password?
              </a>
              <button type="submit">Sign In</button>
            </form>

            <div className="redirect-box">
              <div className="redirect-text">Don't have an account?</div>
              <div className="redirect-link">
                <Link to="/signup" className="link">
                  {" "}
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="login-image">
          <img
            src={loginImage}
            alt="Login Image"
            style={{ width: "60vw", height: "100vh" }}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
