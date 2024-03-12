import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/login_signup.scss";

const Login = () => {
  const navigater = useNavigate();

  const [login_details, setState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setState({ ...login_details, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login_details),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.message);
          localStorage.setItem("user_id", data.user_id);
          localStorage.setItem("user_type", data.user_type);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="signup-page">
        <Header />

        <div className="signup-form">
          <div className="signup-title">Login</div>

          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <div className="input-label">Email:</div>

              <input
                type="email"
                name="email"
                value={login_details.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-box">
              <div className="input-label">Password:</div>

              <input
                type="password"
                name="password"
                value={login_details.password}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="submit-btn">
              <input type="submit" value="Submit" onSubmit={handleSubmit} />
            </div>
          </div>

          {/* <div>
            <Link to="/">Already Registered? Click here to Login</Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
